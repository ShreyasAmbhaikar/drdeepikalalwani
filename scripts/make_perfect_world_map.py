from PIL import Image

orig_map = Image.open('public/images/testimonials-bg-metal.png').convert('RGBA')
print("testimonials-bg-metal size:", orig_map.size)

# Extract alpha and make white dots
pixels = orig_map.load()
width, height = orig_map.size

max_a = 0
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > max_a:
            max_a = a

print("Max alpha:", max_a)

out_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
out_pixels = out_img.load()

# Create pure white dots with boosted opacity (scaled up so it is crisp & visible on dark purple)
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        if a > 0:
            boosted_a = min(255, int((a / max_a) * 220))
            out_pixels[x, y] = (255, 255, 255, boosted_a)

out_img.save('public/images/testimonials-world-map.png')
print("Saved public/images/testimonials-world-map.png successfully!")
