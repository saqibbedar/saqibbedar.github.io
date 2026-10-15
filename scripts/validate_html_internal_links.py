import re, pathlib

html_files = list(pathlib.Path('.').glob('*.html')) + list(pathlib.Path('projects').glob('*.html')) + list(pathlib.Path('resume').glob('*.html'))
pattern = re.compile(r'href=[\"\\\']((?:projects/|resume/)?[a-zA-Z0-9_\-]+\.html)[\"\\\']')

broken = []
for f in html_files:
    for m in pattern.finditer(f.read_text(encoding='utf-8', errors='ignore')):
        target = m.group(1).lstrip('/')
        if not pathlib.Path(target).exists() and not (f.parent / target).exists():
            broken.append(f'{f} -> {target}')

if broken:
    print('Broken links found:', broken)
else:
    print('✓ All internal HTML page links resolve cleanly.')