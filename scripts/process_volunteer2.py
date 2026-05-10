import os
import shutil

src_base = r'C:\Users\HZY\Desktop\temp\我的信息\志愿活动-整理版'
dst_base = r'C:\Users\HZY\Desktop\temp\personal-site-template\data\life_photos\volunteer'

# Mapping: folder prefix -> (slug, {source_keyword_in_filename: dst_name})
mappings = [
    ("01-", "grad-exam", {"自拍": "photo.jpg", "证书": "cert.jpg"}),
    ("02-", "cherry-blossom", {"照片1": "photo1.jpg", "照片2": "photo2.jpg", "证书": "cert.jpg"}),
    ("03-", "city-civilized", {"照片1": "photo1.jpg", "照片2": "photo2.jpg", "证书": "cert.jpg"}),
    ("04-", "charity-run", {"照片": "photo.jpg", "证书": "cert.jpg"}),
    ("05-", "jinling-style", {"自拍": "photo.jpg", "证书": "cert.jpg"}),
    ("06-", "turtle-art", {"证书": "cert.jpg"}),
    ("07-", "standard-dance", {"照片1": "photo1.jpg", "照片2": "photo2.jpg", "证书": "cert.jpg"}),
    ("08-", "yincheng-community", {"证书": "cert.jpg"}),
    ("09-", "jiangsu-football-semi", {"合照": "photo.jpg", "证书": "cert.jpg"}),
    ("10-", "jiangsu-football-final", {"合照": "photo.jpg", "证书": "cert.jpg"}),
    ("11-", "nanjing-marathon", {"照片1": "photo1.jpg", "照片2": "photo2.jpg", "证书": "cert.jpg"}),
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

for prefix, slug, file_map in mappings:
    matched = [(name, path) for name, path in src_folders if name.startswith(prefix)]
    if not matched:
        log.append(f"WARNING: No folder for prefix {prefix}")
        continue
    
    # If multiple matches (encoding duplicates), pick the one with more .jpg files
    best_name, best_path = matched[0]
    if len(matched) > 1:
        best_count = 0
        for name, path in matched:
            jpg_count = sum(1 for f in os.listdir(path) if f.endswith('.jpg'))
            if jpg_count > best_count:
                best_count = jpg_count
                best_name, best_path = name, path
        log.append(f"Multiple matches for {prefix}, picked {best_name} with {best_count} jpgs")
    else:
        log.append(f"Matched {best_name}")
    
    dst_dir = os.path.join(dst_base, slug)
    os.makedirs(dst_dir, exist_ok=True)
    
    # List files in source dir
    files = os.listdir(best_path)
    log.append(f"  Files: {files}")
    
    for src_file in files:
        if not src_file.endswith('.jpg'):
            continue
        # Skip WeChat chat records
        if '微信' in src_file or '聊天' in src_file:
            log.append(f"  SKIPPED (privacy): {src_file}")
            continue
        
        # Find matching dst name
        dst_name = None
        for keyword, dname in file_map.items():
            if keyword in src_file:
                dst_name = dname
                break
        
        if dst_name:
            src_path = os.path.join(best_path, src_file)
            dst_path = os.path.join(dst_dir, dst_name)
            shutil.copy2(src_path, dst_path)
            log.append(f"  OK: {src_file} -> {dst_name}")
        else:
            log.append(f"  UNMATCHED: {src_file}")

# Copy photo1.jpg to photo.jpg where applicable
for slug in ["cherry-blossom", "city-civilized", "standard-dance", "nanjing-marathon"]:
    p1 = os.path.join(dst_base, slug, "photo1.jpg")
    p = os.path.join(dst_base, slug, "photo.jpg")
    if os.path.exists(p1) and not os.path.exists(p):
        shutil.copy2(p1, p)
        log.append(f"Created: {slug}/photo.jpg")

# Write log
with open(r'C:\Users\HZY\Desktop\temp\personal-site-template\scripts\process_volunteer2.log', 'w', encoding='utf-8') as f:
    f.write('\n'.join(log))
