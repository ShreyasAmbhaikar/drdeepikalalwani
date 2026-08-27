const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedDir = 'C:\\Users\\Shreyas Ambhaikar\\.gemini\\antigravity\\brain\\f83a5074-ad92-45b2-90eb-ad49a5498239\\.user_uploaded';
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

async function processDoctorPortrait() {
  const doctorJpg = path.join(uploadedDir, 'media_1787682775776.jpg');
  if (fs.existsSync(doctorJpg)) {
    // Generate optimized WebP
    await sharp(doctorJpg)
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'dr-deepika-lalwani-portrait.webp'));
    console.log('Generated dr-deepika-lalwani-portrait.webp');

    // Also generate a square crop for about section / avatars
    await sharp(doctorJpg)
      .resize(800, 1000, { fit: 'cover', position: 'top' })
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'dr-deepika-portrait-tall.webp'));
    console.log('Generated dr-deepika-portrait-tall.webp');
  } else {
    console.error('Doctor image not found at', doctorJpg);
  }
}

async function processPostImage() {
  const postJpg = path.join(uploadedDir, 'media_1787683076839.jpg');
  if (fs.existsSync(postJpg)) {
    await sharp(postJpg)
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'pregnancy-care-deepika-banner.webp'));
    console.log('Generated pregnancy-care-deepika-banner.webp');
  }
}

// Generate crisp SVG logos for Dark and Light themes
function generateSvgLogos() {
  // SVG Icon Path for the Mother Silhouette and Leaf Wreath
  const logoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED" />
      <stop offset="50%" stop-color="#581C87" />
      <stop offset="100%" stop-color="#3B0764" />
    </linearGradient>
  </defs>
  <!-- Decorative Floral Wreath Left -->
  <path d="M120,240 C110,180 140,120 180,90 C175,115 160,140 145,160 C130,180 120,210 120,240 Z" fill="url(#purpleGrad)"/>
  <path d="M90,200 C80,160 100,120 130,100 C125,120 115,140 105,160 C95,180 90,195 90,200 Z" fill="url(#purpleGrad)"/>
  <path d="M110,290 C90,260 90,210 105,175 C115,195 120,225 125,250 C125,270 120,285 110,290 Z" fill="url(#purpleGrad)"/>
  <path d="M130,340 C100,310 95,260 110,220 C125,245 135,280 145,305 C140,325 135,335 130,340 Z" fill="url(#purpleGrad)"/>
  
  <!-- Decorative Floral Wreath Right -->
  <path d="M380,240 C390,180 360,120 320,90 C325,115 340,140 355,160 C370,180 380,210 380,240 Z" fill="url(#purpleGrad)"/>
  <path d="M410,200 C420,160 400,120 370,100 C375,120 385,140 395,160 C405,180 410,195 410,200 Z" fill="url(#purpleGrad)"/>
  <path d="M390,290 C410,260 410,210 395,175 C385,195 380,225 375,250 C375,270 380,285 390,290 Z" fill="url(#purpleGrad)"/>
  <path d="M370,340 C400,310 405,260 390,220 C375,245 365,280 355,305 C360,325 365,335 370,340 Z" fill="url(#purpleGrad)"/>
  
  <!-- Outer Circular Cradle Border -->
  <path d="M140,330 C170,390 230,420 300,410 C360,400 400,350 370,320 C360,355 320,395 270,400 C210,405 160,370 140,330 Z" fill="url(#purpleGrad)"/>

  <!-- Mother Head & Hair -->
  <circle cx="280" cy="140" r="35" fill="url(#purpleGrad)"/>
  <path d="M260,130 C240,135 225,155 225,180 C235,170 250,165 265,165 C285,165 295,150 295,135 C285,130 270,128 260,130 Z" fill="#FFFFFF"/>
  <!-- Leaf in Hair -->
  <path d="M245,130 C230,120 235,105 250,110 C260,115 255,128 245,130 Z" fill="url(#purpleGrad)"/>
  <path d="M265,125 C255,110 265,95 280,105 C285,115 275,125 265,125 Z" fill="url(#purpleGrad)"/>

  <!-- Mother Body & Pregnant Belly Silhouette -->
  <path d="M275,175 C255,190 245,215 240,240 C230,280 230,330 255,365 C265,380 280,390 300,390 C280,390 260,375 250,350 C235,320 235,270 250,230 C258,210 270,190 285,180 Z" fill="url(#purpleGrad)"/>
  <path d="M275,175 C295,200 315,230 315,270 C315,310 285,345 255,365 C290,345 330,310 330,265 C330,220 305,190 275,175 Z" fill="url(#purpleGrad)"/>

  <!-- Loving Arms Supporting Belly -->
  <path d="M260,240 C265,275 280,310 310,330 C315,335 325,335 330,328 C332,324 328,318 320,315 C295,300 280,270 278,240 Z" fill="url(#purpleGrad)"/>

  <!-- Heart inside the Womb -->
  <path d="M295,290 C290,282 280,282 275,288 C270,282 260,282 255,290 C250,300 265,315 275,322 C285,315 300,300 295,290 Z" fill="#E879F9"/>

  <!-- Flowing Hair Strands -->
  <path d="M295,150 C320,180 335,230 330,270 C325,240 315,200 295,175 Z" fill="url(#purpleGrad)"/>
</svg>`;

  const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="whiteLavenderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#F3E8FF" />
      <stop offset="100%" stop-color="#D8B4FE" />
    </linearGradient>
  </defs>
  <!-- Decorative Floral Wreath Left -->
  <path d="M120,240 C110,180 140,120 180,90 C175,115 160,140 145,160 C130,180 120,210 120,240 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M90,200 C80,160 100,120 130,100 C125,120 115,140 105,160 C95,180 90,195 90,200 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M110,290 C90,260 90,210 105,175 C115,195 120,225 125,250 C125,270 120,285 110,290 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M130,340 C100,310 95,260 110,220 C125,245 135,280 145,305 C140,325 135,335 130,340 Z" fill="url(#whiteLavenderGrad)"/>
  
  <!-- Decorative Floral Wreath Right -->
  <path d="M380,240 C390,180 360,120 320,90 C325,115 340,140 355,160 C370,180 380,210 380,240 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M410,200 C420,160 400,120 370,100 C375,120 385,140 395,160 C405,180 410,195 410,200 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M390,290 C410,260 410,210 395,175 C385,195 380,225 375,250 C375,270 380,285 390,290 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M370,340 C400,310 405,260 390,220 C375,245 365,280 355,305 C360,325 365,335 370,340 Z" fill="url(#whiteLavenderGrad)"/>
  
  <!-- Outer Circular Cradle Border -->
  <path d="M140,330 C170,390 230,420 300,410 C360,400 400,350 370,320 C360,355 320,395 270,400 C210,405 160,370 140,330 Z" fill="url(#whiteLavenderGrad)"/>

  <!-- Mother Head & Hair -->
  <circle cx="280" cy="140" r="35" fill="url(#whiteLavenderGrad)"/>
  <path d="M260,130 C240,135 225,155 225,180 C235,170 250,165 265,165 C285,165 295,150 295,135 C285,130 270,128 260,130 Z" fill="#2E0854"/>
  <!-- Leaf in Hair -->
  <path d="M245,130 C230,120 235,105 250,110 C260,115 255,128 245,130 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M265,125 C255,110 265,95 280,105 C285,115 275,125 265,125 Z" fill="url(#whiteLavenderGrad)"/>

  <!-- Mother Body & Pregnant Belly Silhouette -->
  <path d="M275,175 C255,190 245,215 240,240 C230,280 230,330 255,365 C265,380 280,390 300,390 C280,390 260,375 250,350 C235,320 235,270 250,230 C258,210 270,190 285,180 Z" fill="url(#whiteLavenderGrad)"/>
  <path d="M275,175 C295,200 315,230 315,270 C315,310 285,345 255,365 C290,345 330,310 330,265 C330,220 305,190 275,175 Z" fill="url(#whiteLavenderGrad)"/>

  <!-- Loving Arms Supporting Belly -->
  <path d="M260,240 C265,275 280,310 310,330 C315,335 325,335 330,328 C332,324 328,318 320,315 C295,300 280,270 278,240 Z" fill="url(#whiteLavenderGrad)"/>

  <!-- Heart inside the Womb -->
  <path d="M295,290 C290,282 280,282 275,288 C270,282 260,282 255,290 C250,300 265,315 275,322 C285,315 300,300 295,290 Z" fill="#F472B6"/>

  <!-- Flowing Hair Strands -->
  <path d="M295,150 C320,180 335,230 330,270 C325,240 315,200 295,175 Z" fill="url(#whiteLavenderGrad)"/>
</svg>`;

  fs.writeFileSync(path.join(publicImagesDir, 'logo-dark.svg'), logoDarkSvg, 'utf8');
  fs.writeFileSync(path.join(publicImagesDir, 'logo-light.svg'), logoLightSvg, 'utf8');
  console.log('Saved logo-dark.svg and logo-light.svg');
}

async function run() {
  await processDoctorPortrait();
  await processPostImage();
  generateSvgLogos();
}

run().catch(console.error);
