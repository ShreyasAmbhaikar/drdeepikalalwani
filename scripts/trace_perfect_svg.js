const fs = require('fs');
const path = require('path');
const potrace = require('potrace');
const sharp = require('sharp');

const inputImg = path.join(__dirname, 'perfect_cropped_full.png');
const publicDir = path.join(__dirname, '..', 'public', 'images');

const params = {
  turdSize: 1,
  optTolerance: 0.1,
  alphaMax: 1.0,
  threshold: 128,
  blackOnWhite: true,
  color: '#6E2594'
};

potrace.trace(inputImg, params, async (err, svg) => {
  if (err) {
    console.error('Error tracing SVG:', err);
    return;
  }

  console.log('Successfully traced full logo with tagline into SVG.');

  // 1. Dark Theme SVG (Vibrant Purple #6E2594 for light header/pages)
  const darkSvg = svg
    .replace(/fill="#6E2594"/g, 'fill="#6E2594"')
    .replace(/<svg /, '<svg fill="#6E2594" ');

  // 2. Light Theme SVG (Pure White #FFFFFF for dark footer)
  const lightSvg = svg
    .replace(/fill="#6E2594"/g, 'fill="#FFFFFF"')
    .replace(/<svg /, '<svg fill="#FFFFFF" ');

  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), darkSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), lightSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-full-dark.svg'), darkSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-full-light.svg'), lightSvg, 'utf8');

  // Convert to high-resolution PNGs with Sharp
  await sharp(Buffer.from(darkSvg))
    .resize(1024, null, { fit: 'inside' })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  await sharp(Buffer.from(darkSvg))
    .resize(512, 512, { fit: 'inside' })
    .png()
    .toFile(path.join(publicDir, 'logo-icon.png'));

  console.log('Saved all SVG & PNG logo files with exact details and tagline intact.');
});
