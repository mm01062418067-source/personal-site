import os
import shutil

src_base = r'C:\Users\HZY\Desktop\temp\我的信息\志愿活动-整理版'
dst_base = r'C:\Users\HZY\Desktop\temp\personal-site-template\data\life_photos\volunteer'

mappings = [
    ("01-", "grad-exam", {"活动自拍.jpg": "photo.jpg", "证书.jpg": "cert.jpg"}),
    ("02-", "cherry-blossom", {"活动照片1.jpg": "photo1.jpg", "活动照片2.jpg": "photo2.jpg", "证书.jpg": "cert.jpg"}),
    ("03-", "city-civilized", {"活动照片1.jpg": "photo1.jpg", "活动照片2.jpg": "photo2.jpg", "证书.jpg": "cert.jpg"}),
    ("04-", "charity-run", {"活动照片.jpg": "photo.jpg", "证书.jpg": "cert.jpg"}),
    ("05-", "jinling-style", {"活动自拍.jpg": "photo.jpg", "证书.jpg": "cert.jpg"}),
    ("06-", "turtle-art", {"证书.jpg": "cert.jpg"}),
    ("07-", "standard-dance", {"活动照片1.jpg": "photo1.jpg", "活动照片2.jpg": "photo2.jpg", "证书.jpg": "cert.jpg"}),
    ("08-", "yincheng-community", {"证书.jpg": "cert.jpg"}),
    ("09-", "jiangsu-football-semi", {"志愿小队在体育场合照.jpg": "photo.jpg", "证书.jpg": "cert.jpg"}),
    ("10-", "jiangsu-football-final", {"活动合照.jpg": "photo.jpg", "证书.jpg": "cert.jpg"}),
    ("11-", "nanjing-marathon", {"活动照片1.jpg": "photo1.jpg", "活动照片2.jpg": "photo2.jpg", "证书.jpg": "cert.jpg"}),
]

os.makedirs(dst_base, exist_ok=True)
src_folders = [d for d in os.listdir(src_base) if os.path.isdir(os.path.join(src_base, d))]

log_lines = []
log_lines.append(f"Found {len(src_folders)} source folders")

for prefix, slug, file_map in mappings:
    matched = [d for d in src_folders if d.startswith(prefix)]
    if not matched:
        log_lines.append(f"WARNING: No folder for {prefix} -> {slug}")
        continue
    src_dir = os.path.join(src_base, matched[0])
    dst_dir = os.path.join(dst_base, slug)
    os.makedirs(dst_dir, exist_ok=True)

    for src_name, dst_name in file_map.items():
        src_path = os.path.join(src_dir, src_name)
        dst_path = os.path.join(dst_dir, dst_name)
        if os.path.exists(src_path):
            shutil.copy2(src_path, dst_path)
            log_lines.append(f"OK: {slug}/{dst_name}")
        else:
            log_lines.append(f"MISSING: {slug} needs {src_name}")

# Copy photo1.jpg to photo.jpg where applicable
for slug in ["cherry-blossom", "city-civilized", "standard-dance", "nanjing-marathon"]:
    p1 = os.path.join(dst_base, slug, "photo1.jpg")
    p = os.path.join(dst_base, slug, "photo.jpg")
    if os.path.exists(p1) and not os.path.exists(p):
        shutil.copy2(p1, p)
        log_lines.append(f"OK: {slug}/photo.jpg (copied from photo1.jpg)")

log_lines.append("Done!")

# Write log to file
with open(r'C:\Users\HZY\Desktop\temp\personal-site-template\scripts\process_volunteer.log', 'w', encoding='utf-8') as f:
    f.write('\n'.join(log_lines))
