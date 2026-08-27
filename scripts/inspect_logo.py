from PIL import Image, ImageOps, ImageEnhance, ImageFilter

img_path = r'C:\Users\Shreyas Ambhaikar\.gemini\antigravity\brain\f83a5074-ad92-45b2-90eb-ad49a5498239\.user_uploaded\media_1787684174987.png'
img = Image.open(img_path).convert('RGBA')

# Convert transparent/semi-white background to pure white
bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
bg.paste(img, mask=img.split()[3])
img_rgb = bg.convert('RGB')

# Let's upscale with high quality Lanczos 4x
w, h = img_rgb.size
large = img_rgb.resize((w * 6, h * 6), Image.Resampling.LANCZOS)

# In the image, purple has high saturation in R & B, low G
# White background and white lines have R ~ G ~ B > 180 or distance to pure white is low
# Let's compute a precise "Purple vs White" mask:
# A pixel is white/background/white-line if (r > 200 and g > 180 and b > 200) or brightness > threshold
# Or even better: calculate color difference to the purple color vs color difference to white!
# Let's define purple reference: (108, 45, 138)
# Let's inspect pixel values across the mother's chest/arm area to find the exact threshold

large.save('scripts/upscaled_original.png')
print("Saved upscaled original image to scripts/upscaled_original.png")
