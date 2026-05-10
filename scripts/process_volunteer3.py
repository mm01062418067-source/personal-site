import os
import shutil

src_base = r'C:\Users\HZY\Desktop\temp\我的信息\志愿活动-整理版'
dst_base = r'C:\Users\HZY\Desktop\temp\personal-site-template\data\life_photos\volunteer'

# Mapping: folder prefix -> (slug, list of dst filenames in expected order)
mappings = [
    ("01-", "grad-exam", ["photo.jpg", "cert.jpg"]),
    ("02-", "cherry-blossom", ["photo1.jpg", "photo2.jpg", "cert.jpg"]),
    ("03-", "city-civilized", ["photo1.jpg", "photo2.jpg", "cert.jpg"]),
    ("04-", "charity-run", ["photo.jpg", "cert.jpg"]),
    ("05-", "jinling-style", ["photo.jpg", "cert.jpg"]),
    ("06-", "turtle-art", ["cert.jpg"]),
    ("07-", "standard-dance", ["photo1.jpg", "photo2.jpg", "cert.jpg"]),
    ("08-", "yincheng-community", ["cert.jpg"]),
    ("09-", "jiangsu-football-semi", ["photo.jpg", "cert.jpg"]),
    ("10-", "jiangsu-football-final", ["photo.jpg", "cert.jpg"]),
    ("11-", "nanjing-marathon", ["photo1.jpg", "photo2.jpg", "cert.jpg"]),
]

os.makedirs(dst_base, exist_ok=True)
log = []

# Get all source folders
src_folders = []
for d in os.listdir(src_base):
    p = os.path.join(src_base, d)
    if os.path.isdir(p):
        src_folders.append((d, p))

log.append(f"Found {len(src_folders)} source folders")

for prefix, slug, dst_names in mappings:
    matched = [(name, path) for name, path in src_folders if name.startswith(prefix)]
    if not matched:
        log.append(f"WARNING: No folder for prefix {prefix}")
        continue
    
    # If multiple matches, pick the one with more .jpg files
    best_name, best_path = matched[0]
    if len(matched) > 1:
        best_count = 0
        for name, path in matched:
            jpg_files = [f for f in os.listdir(path) if f.endswith('.jpg')]
            # Skip WeChat chat records
            jpg_files = [f for f in jpg_files if '微信' not in f and '聊天' not in f]
            if len(jpg_files) > best_count:
                best_count = len(jpg_files)
                best_name, best_path = name, path
        log.append(f"Multiple matches for {prefix}, picked {repr(best_name)} with {best_count} jpgs")
    else:
        log.append(f"Matched {repr(best_name)}")
    
    dst_dir = os.path.join(dst_base, slug)
    os.makedirs(dst_dir, exist_ok=True)
    
    # Get all jpg files, skip WeChat chat records
    jpg_files = [f for f in os.listdir(best_path) if f.endswith('.jpg')]
    jpg_files = [f for f in jpg_files if '微信' not in f and '聊天' not in f]
    jpg_files.sort()
    
    log.append(f"  JPG files ({len(jpg_files)}): {[repr(f) for f in jpg_files]}")
    
    if len(jpg_files) != len(dst_names):
        log.append(f"  MISMATCH: expected {len(dst_names)} files, got {len(jpg_files)}")
    
    for i, src_file in enumerate(jpg_files):
        if i < len(dst_names):
            src_path = os.path.join(best_path, src_file)
            dst_path = os.path.join(dst_dir, dst_names[i])
            shutil.copy2(src_path, dst_path)
            log.append(f"  OK: {repr(src_file)} -> {dst_names[i]}")
        else:
            log.append(f"  EXTRA: {repr(src_file)}")

# Copy photo1.jpg to photo.jpg where applicable
for slug in ["cherry-blossom", "city-civilized", "standard-dance", "nanjing-marathon"]:
    p1 = os.path.join(dst_base, slug, "photo1.jpg")
    p = os.path.join(dst_base, slug, "photo.jpg")
    if os.path.exists(p1) and not os.path.exists(p):
        shutil.copy2(p1, p)
        log.append(f"Created: {slug}/photo.jpg")

# Write log
with open(r'C:\Users\HZY\Desktop\temp\personal-site-template\scripts\process_volunteer3.log', 'w', encoding='utf-8') as f:
    f.write('\n'.join(log))
