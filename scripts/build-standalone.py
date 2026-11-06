#!/usr/bin/env python3
"""Bundle dist/ into one double-click HTML file (hash-routed SPA, all assets inlined).
Run after `npm run build`:  python3 scripts/build-standalone.py
Output: standalone/mavalli-biryani-standalone.html"""
import re, base64, mimetypes, pathlib, sys
root = pathlib.Path(__file__).resolve().parent.parent
dist = root / 'dist'
ROUTES = ['/', '/menu/', '/order/', '/about/', '/gallery/', '/catering/', '/contact/', '/faq/', '/privacy/', '/terms/', '/refund/', '/cookies/']
MIME = {'.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.js': 'text/javascript'}
cache = {}
def uri(p):
    p = p.split('?')[0]
    if p not in cache:
        f = dist / p.lstrip('/')
        cache[p] = f'data:{MIME[f.suffix]};base64,' + base64.b64encode(f.read_bytes()).decode()
    return cache[p]
ASSET = r'/(?:img|video|_astro)/[^"\')\s]+|/favicon\.png'
def inline_assets(s):
    s = re.sub(r',\s*url\(\s*["\']?/_astro/[^)]*\.woff\)\s*format\(["\']?woff["\']?\)', '', s)   # keep woff2 only
    s = re.sub(r'(["\'(])(' + ASSET + r')(?=["\')])', lambda m: m.group(1) + uri(m.group(2)), s)
    return s
def page(route):
    f = dist / ('index.html' if route == '/' else route.strip('/') + '/index.html')
    return f.read_text(encoding='utf-8')
def inner_main(h):
    m = re.search(r'<main id="main"[^>]*>([\s\S]*)</main>', h); return m.group(1)
def title(h): return re.search(r'<title>(.*?)</title>', h, re.S).group(1)

home = page('/')
head = home[:home.index('<body>')]
body = home[home.index('<body>'):]
# distinct <style> blocks from every page (tree-shaken CSS differs per page)
styles = []
for r in ROUTES:
    for st in re.findall(r'<style>([\s\S]*?)</style>', page(r)):
        if st not in styles: styles.append(st)
desc = re.search(r'<meta name="description"[^>]*>', head).group(0)
icon = '<link rel="icon" href="/favicon.png">'
new_head = ('<!DOCTYPE html><html lang="en"><head><!-- Mavalli Biryani Jayanagar: standalone site. Open this single file in Chrome. -->'
  '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + title(home) + '</title>' + desc +
  '<noscript><style>[hidden]{display:none}.reveal,.rv{opacity:1!important;transform:none!important;clip-path:none!important}</style></noscript>' +
  icon + ''.join(f'<style>{s}</style>' for s in styles) + '</head>')
pages = ''
for r in ROUTES:
    h = page(r)
    hidden = '' if r == '/' else ' hidden'
    pages += f'<div class="spa-page" data-page="{r}" data-title="{title(h)}"{hidden}>{inner_main(h)}</div>'
main = re.search(r'<main id="main"[^>]*>', body).group(0)
body = re.sub(r'<main id="main"[^>]*>[\s\S]*</main>', lambda m: main + pages + '</main>', body, count=1)
body = body.replace('</body></html>', '') if body.rstrip().endswith('</html>') else body
doc = new_head + body
# astro's external module script -> inline
def inl(m):
    return '<script type="module">' + (dist / m.group(1).lstrip('/')).read_text(encoding='utf-8') + '</script>'
doc = re.sub(r'<script type="module" src="(/_astro/[^"]+)"></script>', inl, doc)
doc = re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>', '', doc)
# analytics is not loaded offline, so drop the consent banner and its triggers from the standalone preview
doc = re.sub(r'<div id="consent".*?</div></div>', '', doc, flags=re.S)
doc = re.sub(r'<li><button type="button" class="flink" data-cookie-settings>Cookie settings</button></li>', '', doc)
doc = re.sub(r'<button type="button" class="legal-link" data-cookie-settings>(.*?)</button>', r'<span>\1</span>', doc)
doc = re.sub(r' srcset="[^"]*"( sizes="[^"]*")?', '', doc)   # responsive variants not needed offline
doc = inline_assets(doc)
# internal links -> hash routes
def link(m):
    p = m.group(1)
    base = p.split('#')[0]
    return 'href="#!' + p + '"' if base in ROUTES else m.group(0)
doc = re.sub(r'href="(/[^"]*)"', link, doc)
router = (root / 'scripts' / 'standalone-router.js').read_text(encoding='utf-8')
doc = doc.rstrip()
doc = re.sub(r'(</body>)?\s*(</html>)?\s*$', '', doc) + '<script>' + router + '</script></body></html>'
leftover = re.findall(r'(?:href|src)="(/[^"]*)"', doc)
if leftover: print('WARN leftover absolute paths:', sorted(set(leftover))[:10], file=sys.stderr)
out = root / 'standalone' / 'mavalli-biryani-standalone.html'
out.write_text(doc, encoding='utf-8'); print(out, round(len(doc) / 1e6, 2), 'MB')
