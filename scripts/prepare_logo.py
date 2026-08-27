import os
from PIL import Image, ImageFilter, ImageOps

uploaded_path = r"C:\Users\Shreyas Ambhaikar\.gemini\antigravity\brain\f83a5074-ad92-45b2-90eb-ad49a5498239\.user_uploaded\media_1787683459871.png"
output_clean_path = r"c:\Users\Shreyas Ambhaikar\Desktop\SEO Websites\drdeepikalalwani\scripts\clean_logo.png"

img = Image.open(uploaded_path).convert("RGBA")

# Upscale 4x for extreme sub-pixel edge smoothness
w, h = img.size
img_large = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)

# Create a grayscale mask where purple pixels are black and background is white
# In the image, purple is RGB roughly around (90..130, 20..50, 130..180)
# White background is (250+, 250+, 250+)
gray = img_large.convert("L")

# Let's do adaptive thresholding / high contrast binarization
# Any pixel darker than 220 is part of the logo
threshold = 215
binary = gray.point(lambda p: 0 if p < threshold else 255, mode='1')

# Smooth edges slightly to avoid jagged pixels
binary_smooth = binary.convert("L").filter(ImageFilter.SMOOTH_MORE)
binary_final = binary_smooth.point(lambda p: 0 if p < 128 else 255, mode='1')

binary_final.save(output_clean_path)
print(f"Saved high-res smoothed binary logo to {output_clean_path}")
