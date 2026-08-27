from PIL import Image, ImageOps, ImageFilter, ImageEnhance
import math

img_path = r'C:\Users\Shreyas Ambhaikar\.gemini\antigravity\brain\f83a5074-ad92-45b2-90eb-ad49a5498239\.user_uploaded\media_1787684174987.png'
img = Image.open(img_path).convert('RGBA')

# White background paste
canvas = Image.new('RGB', img.size, (255, 255, 255))
canvas.paste(img, mask=img.split()[3])

# First enhance sharpness on original small scale so thin lines are pronounced
enhancer = ImageEnhance.Sharpness(canvas)
sharpened = enhancer.enhance(2.5)

# Upscale 6x with Lanczos
w, h = sharpened.size
large = sharpened.resize((w * 6, h * 6), Image.Resampling.LANCZOS)

# Create high-precision binary mask
# Purple pixels: r, g, b where g is much lower than r and b (e.g. g < 160 or (r+b)/2 - g > 30)
# White / background / arm line: g > 175 or brightness > 180
binary = Image.new('L', large.size, 255)
pixels = large.load()
bin_pixels = binary.load()

for y in range(large.size[1]):
    for x in range(large.size[0]):
        r, g, b = pixels[x, y]
        # Calculate color saturation and brightness
        # Pure purple is ~ (100, 40, 130) -> g is very low compared to r and b
        # White line/bg is ~ (240, 240, 240) -> g is high
        is_purple = (g < 145) and (b > 80 or r > 60) and ((r - g) > 15 or (b - g) > 25)
        
        if is_purple:
            bin_pixels[x, y] = 0 # Black in binary mask (logo shape)
        else:
            bin_pixels[x, y] = 255 # White background / cutout

# Save threshold test
binary.save('scripts/perfect_binary.png')
print("Saved scripts/perfect_binary.png")
