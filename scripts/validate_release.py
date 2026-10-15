import tomllib, pathlib, sys

toml_path = pathlib.Path('.github/release.toml')
data = tomllib.load(open(toml_path, 'rb'))

print(f"✓ TOML valid: version={data.get('version')}, tag={data.get('tag')}")

required = ['index.html', 'sitemap.xml', 'robots.txt', 'google90204ddbeb9f3cf5.html']
for r in required:
    assert pathlib.Path(r).exists(), f'Missing {r}'
print('✓ All required static assets verified.')