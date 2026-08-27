from PIL import Image, ImageOps

img = Image.open('scripts/clean_logo.png').convert('L')
w, h = img.size

# Invert so logo is 255 (white on black) for getbbox()
inv = ImageOps.invert(img)
full_bbox = inv.getbbox()
print('Full logo bounding box:', full_bbox)

# Find row histogram to find gap between circular wreath and text tagline
row_counts = []
for y in range(h):
    count = 0
    for x in range(w):
        if img.getpixel((x, y)) < 128:
            count += 1
    row_counts.append(count)

# Find first clean gap of empty rows around 75%-85% height
gap_y = int(h * 0.78)
for y in range(int(h * 0.65), int(h * 0.85)):
    if row_counts[y] == 0:
        gap_y = y
        break

print('Found gap row at y =', gap_y)

# Crop emblem (from 0 to gap_y)
emblem_part = inv.crop((0, 0, w, gap_y))
e_bbox = emblem_part.getbbox()
print('Emblem bounding box:', e_bbox)

margin = 24
e_cropped = img.crop((
    max(0, e_bbox[0] - margin),
    max(0, e_bbox[1] - margin),
    min(w, e_bbox[2] + margin),
    min(gap_y, e_bbox[3] + margin)
))
e_cropped.save('scripts/clean_emblem.png')

f_cropped = img.crop((
    max(0, full_bbox[0] - margin),
    max(0, full_bbox[1] - margin),
    min(w, full_bbox[2] + margin),
    min(h, full_bbox[3] + margin)
))
f_cropped.save('scripts/clean_full.png')

print("Saved clean_emblem.png and clean_full.png successfully!")
