from PIL import Image, ImageOps, ImageFilter

img = Image.open('scripts/perfect_binary.png')
inv = ImageOps.invert(img)
bbox = inv.getbbox()
print('Exact bounding box of logo + tagline:', bbox)

# Crop with clean 20px padding
pad = 20
cropped = img.crop((
    max(0, bbox[0] - pad),
    max(0, bbox[1] - pad),
    min(img.width, bbox[2] + pad),
    min(img.height, bbox[3] + pad)
))

cropped.save('scripts/perfect_cropped_full.png')
print(f'Saved cropped full logo (size: {cropped.size}) to scripts/perfect_cropped_full.png')
