const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createFavicons() {
  // SVG with royal purple circular background and white emblem
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="favBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5A1F84"/>
      <stop offset="100%" stop-color="#381552"/>
    </linearGradient>
  </defs>
  <!-- Circular Background -->
  <circle cx="256" cy="256" r="256" fill="url(#favBg)"/>
  
  <!-- White Wreath & Pregnant Mother Emblem -->
  <g transform="translate(48, 48) scale(0.8125)">
    <!-- Leaf Wreath -->
    <path d="M 68 280 C 58 240, 56 195, 78 152 C 92 125, 114 102, 142 86 C 145 102, 140 120, 128 132 C 114 146, 96 154, 88 174 C 78 198, 76 230, 84 260 Z" fill="#FFFFFF"/>
    <path d="M 132 80 C 130 52, 144 26, 168 12 C 176 34, 168 58, 150 74 C 144 80, 138 82, 132 80 Z" fill="#FFFFFF"/>
    <path d="M 174 88 C 190 64, 218 50, 246 48 C 242 74, 222 96, 196 102 C 188 104, 180 98, 174 88 Z" fill="#FFFFFF"/>
    <path d="M 88 136 C 72 118, 66 90, 74 66 C 92 78, 100 102, 98 124 C 96 132, 92 136, 88 136 Z" fill="#FFFFFF"/>
    <path d="M 52 204 C 36 190, 26 168, 28 144 C 48 150, 62 168, 66 188 C 66 196, 60 202, 52 204 Z" fill="#FFFFFF"/>
    <path d="M 444 280 C 454 240, 456 195, 434 152 C 420 125, 398 102, 370 86 C 367 102, 372 120, 384 132 C 398 146, 416 154, 424 174 C 434 198, 436 230, 428 260 Z" fill="#FFFFFF"/>
    <path d="M 380 80 C 382 52, 368 26, 344 12 C 336 34, 344 58, 362 74 C 368 80, 374 82, 380 80 Z" fill="#FFFFFF"/>
    <path d="M 338 88 C 322 64, 294 50, 266 48 C 270 74, 290 96, 316 102 C 324 104, 332 98, 338 88 Z" fill="#FFFFFF"/>
    <path d="M 424 136 C 440 118, 446 90, 438 66 C 420 78, 412 102, 414 124 C 416 132, 420 136, 424 136 Z" fill="#FFFFFF"/>
    <path d="M 460 204 C 476 190, 486 168, 484 144 C 464 150, 450 168, 446 188 C 446 196, 452 202, 460 204 Z" fill="#FFFFFF"/>

    <!-- Bottom Circular Stem Arc -->
    <path d="M 80 270 C 95 365, 170 435, 256 435 C 342 435, 417 365, 432 270 C 424 274, 414 278, 404 282 C 390 355, 330 410, 256 410 C 182 410, 122 355, 108 282 C 98 278, 88 274, 80 270 Z" fill="#FFFFFF"/>

    <!-- Pregnant Mother Silhouette -->
    <!-- Head & Hair -->
    <path d="M 256 82 C 274 82, 288 96, 288 114 C 288 132, 274 146, 256 146 C 238 146, 224 132, 224 114 C 224 96, 238 82, 256 82 Z" fill="#FFFFFF"/>
    <path d="M 242 84 C 258 74, 282 82, 296 98 C 304 108, 308 124, 304 140 C 298 132, 290 126, 282 124 C 274 122, 260 126, 252 134 C 250 120, 256 102, 242 84 Z" fill="#FFFFFF"/>
    <path d="M 296 130 C 314 150, 318 180, 310 208 C 304 196, 300 180, 294 168 C 290 156, 294 142, 296 130 Z" fill="#FFFFFF"/>
    
    <!-- Torso, Back & Pregnant Belly Contour -->
    <path d="M 250 154 C 236 172, 220 196, 214 224 C 206 256, 210 292, 224 322 C 234 344, 252 364, 274 374 C 286 380, 298 382, 308 378 C 322 372, 332 358, 334 342 C 338 314, 322 284, 302 264 C 286 248, 268 238, 258 218 C 250 200, 254 176, 258 156 Z" fill="#FFFFFF"/>
    
    <!-- Cutout inside womb revealing heartbeat / baby space -->
    <path d="M 264 258 C 278 274, 288 296, 284 318 C 280 334, 268 346, 254 348 C 242 342, 234 328, 232 314 C 228 292, 236 270, 248 254 C 254 252, 260 254, 264 258 Z" fill="url(#favBg)"/>

    <!-- Subtle Heart on Womb -->
    <path d="M 258 292 C 258 286, 266 282, 270 286 C 274 282, 282 286, 282 292 C 282 300, 270 308, 270 308 C 270 308, 258 300, 258 292 Z" fill="#FFFFFF"/>
  </g>
</svg>`;

  const buffer = Buffer.from(svg);
  const outDir = path.join(process.cwd(), 'public');
  const appDir = path.join(process.cwd(), 'src', 'app');

  await sharp(buffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  await sharp(buffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(outDir, 'images', 'logo-icon.png'));

  await sharp(buffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(outDir, 'images', 'favicon.png'));

  await sharp(buffer)
    .resize(64, 64)
    .png()
    .toFile(path.join(outDir, 'favicon.ico'));

  console.log("Successfully generated all favicons with the white logo emblem on Royal Purple background!");
}

createFavicons().catch(console.error);
