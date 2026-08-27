const fs = require('fs');
const path = require('path');
const potrace = require('potrace');
const sharp = require('sharp');

const inputImg = path.join(__dirname, 'clean_logo.png');
const publicDir = path.join(__dirname, '..', 'public', 'images');

const params = {
  turdSize: 4,
  optTolerance: 0.2,
  alphaMax: 1.0,
  threshold: 128,
  blackOnWhite: true,
  color: '#581C87'
};

potrace.trace(inputImg, params, async (err, svg) => {
  if (err) {
    console.error('Error tracing SVG:', err);
    return;
  }

  // Extract the SVG content and clean it up
  // The svg contains viewBox and path
  console.log('Successfully traced SVG from original logo.');

  // Create Dark Theme SVG (Purple #581C87 for light backgrounds)
  const darkSvg = svg
    .replace(/fill="#581C87"/g, 'fill="#4A1570"')
    .replace(/<svg /, '<svg fill="#4A1570" ');

  // Create Light Theme SVG (White / Lavender for dark backgrounds)
  const lightSvg = svg
    .replace(/fill="#581C87"/g, 'fill="#FFFFFF"')
    .replace(/<svg /, '<svg fill="#FFFFFF" ');

  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), darkSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), lightSvg, 'utf8');
  console.log('Saved logo-dark.svg and logo-light.svg');

  // Also convert to high-res PNGs
  const darkSvgBuffer = Buffer.from(darkSvg);
  const lightSvgBuffer = Buffer.from(lightSvg);

  await sharp(darkSvgBuffer)
    .resize(512, 512, { fit: 'inside' })
    .png()
    .toFile(path.join(publicDir, 'logo-icon.png'));

  await sharp(darkSvgBuffer)
    .resize(1024, null, { fit: 'inside' })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  console.log('Saved logo-icon.png and logo.png');
});
