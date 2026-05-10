import re
import os

with open(r'C:\Users\HZY\Desktop\temp\我的信息\prompt1_clean.md', 'r', encoding='utf-8') as f:
    content = f.read()

sections = content.split('### ')
print(f'Total sections: {len(sections)}')

files_to_write = []

for i, section in enumerate(sections):
    lines = section.split('\n')
    first_line = lines[0] if lines else ''
    if '`' in first_line:
        path_match = re.search(r'`([^`]+)`', first_line)
        if path_match:
            path = path_match.group(1)
            code_match = re.search(r'```(?:\w+)?\n(.*?)\n```', section, re.DOTALL)
            if code_match:
                code = code_match.group(1)
                files_to_write.append((path, code))
                print(f'{len(files_to_write)}. {path} ({len(code)} chars)')

# Write all files
base_dir = r'C:\Users\HZY\Desktop\temp\personal-site-template'
for path, code in files_to_write:
    full_path = os.path.join(base_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f'Wrote: {full_path}')

print(f'\nDone! Wrote {len(files_to_write)} files.')
