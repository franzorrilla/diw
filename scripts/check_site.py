"""Comprobaciones técnicas sin dependencias externas; no sustituyen revisión visual."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1] / 'public'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set(); self.refs=[]; self.scripts=[]; self.script=None; self.lang=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='html': self.lang=bool(a.get('lang'))
        if 'id' in a:
            assert a['id'] not in self.ids, f"ID repetido: {a['id']}"
            self.ids.add(a['id'])
        for key in ('src','href'):
            if a.get(key): self.refs.append(a[key])
        if tag=='script' and not a.get('src') and a.get('type','') in ('','text/javascript','module'):
            self.script=[]
    def handle_data(self,data):
        if self.script is not None: self.script.append(data)
    def handle_endtag(self,tag):
        if tag=='script' and self.script is not None:
            self.scripts.append(''.join(self.script));self.script=None

pages={}
for path in ROOT.rglob('*.html'):
    p=Page();p.feed(path.read_text());assert p.lang, f'{path}: falta idioma'
    pages[path.resolve()]=p
    for js in p.scripts:
        with tempfile.TemporaryDirectory() as tmp:
            f=Path(tmp)/'check.mjs';f.write_text(js)
            subprocess.run(['node','--check',str(f)],check=True)
for path,p in pages.items():
    for ref in p.refs:
        u=urlsplit(ref)
        if u.scheme or u.netloc: continue
        assert not u.path.startswith('/'), f'{path}: ruta absoluta incompatible con /diw/: {ref}'
        dest=(path.parent/unquote(u.path)).resolve() if u.path else path
        assert dest.is_relative_to(ROOT.resolve()), f'Ruta fuera de public: {ref}'
        if dest.is_dir():dest=dest/'index.html'
        assert dest.exists(),f'{path}: enlace interno roto: {ref}'
        if u.fragment and dest in pages:assert unquote(u.fragment) in pages[dest].ids,f'Ancla inexistente: {ref}'
print(f'OK: {len(pages)} páginas; IDs, rutas locales y sintaxis JavaScript comprobados.')
