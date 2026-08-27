import math

# Generate a high quality dotted world map SVG
# Continental coordinates rough bounding boxes for dots matrix
continents = [
    # North America
    {"x": (12, 45), "y": (10, 45), "shape": lambda x, y: (x < 35 and y < 35) or (x > 25 and y > 25 and y < 45 and x < 45)},
    # South America
    {"x": (28, 45), "y": (45, 85), "shape": lambda x, y: y > 45 and (x - 28) < (85 - y) * 0.5 + 12 and (x - 28) > 0},
    # Europe
    {"x": (46, 62), "y": (12, 38), "shape": lambda x, y: True},
    # Africa
    {"x": (45, 68), "y": (35, 75), "shape": lambda x, y: not (x > 60 and y > 60)},
    # Asia
    {"x": (60, 92), "y": (10, 50), "shape": lambda x, y: not (x > 85 and y < 20)},
    # India / South Asia
    {"x": (68, 78), "y": (38, 55), "shape": lambda x, y: True},
    # Australia
    {"x": (78, 92), "y": (62, 85), "shape": lambda x, y: True},
    # UK / Japan / Islands
    {"x": (44, 48), "y": (15, 24), "shape": lambda x, y: True},
    {"x": (88, 93), "y": (25, 38), "shape": lambda x, y: True},
]

width = 1200
height = 600
cols = 100
rows = 50

dots = []
for r in range(rows):
    y_pct = (r / rows) * 100
    cy = (r / rows) * height + 6
    for c in range(cols):
        x_pct = (c / cols) * 100
        cx = (c / cols) * width + 6
        
        # Check if in any continent
        in_land = False
        for cont in continents:
            if cont["x"][0] <= x_pct <= cont["x"][1] and cont["y"][0] <= y_pct <= cont["y"][1]:
                if cont["shape"](x_pct, y_pct):
                    in_land = True
                    break
        
        if in_land:
            dots.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="2.2" />')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" fill="#E9D5FF">
  <g opacity="0.12">
    {''.join(dots)}
  </g>
</svg>'''

with open('public/images/world-map-dots.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print(f"Generated world-map-dots.svg with {len(dots)} dots.")
