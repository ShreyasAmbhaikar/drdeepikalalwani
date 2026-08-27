const fs = require('fs');
const path = require('path');
const potrace = require('potrace');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public', 'images');

const traceFile = (inputPath, baseName) => {
  return new Promise((resolve, reject) => {
    const params = {
      turdSize: 2,
      optTolerance: 0.15,
      alphaMax: 1.0,
      threshold: 128,
      blackOnWhite: true,
      color: '#4A1570'
    };

    potrace.trace(inputPath, params, async (err, svg) => {
      if (err) return reject(err);

      // Dark Theme SVG (for light backgrounds)
      const darkSvg = svg
        .replace(/fill="#4A1570"/g, 'fill="#4A1570"')
        .replace(/<svg /, '<svg fill="#4A1570" ');

      // Light Theme SVG (for dark backgrounds)
      const lightSvg = svg
        .replace(/fill="#4A1570"/g, 'fill="#FFFFFF"')
        .replace(/<svg /, '<svg fill="#FFFFFF" ');

      fs.writeFileSync(path.join(publicDir, `${baseName}-dark.svg`), darkSvg, 'utf8');
      fs.writeFileSync(path.join(publicDir, `${baseName}-light.svg`), lightSvg, 'utf8');

      // Also generate PNGs
      await sharp(Buffer.from(darkSvg))
        .resize(512, 512, { fit: 'inside' })
        .png()
        .toFile(path.join(publicDir, `${baseName}-dark.png`));

      await sharp(Buffer.from(lightSvg))
        .resize(512, 512, { fit: 'inside' })
        .png()
        .toFile(path.join(publicDir, `${baseName}-light.png`));

      console.log(`Generated ${baseName}-dark.svg, ${baseName}-light.svg, and PNGs`);
      resolve({ darkSvg, lightSvg });
    });
  });
};

async function main() {
  // 1. Trace Emblem (Icon with Mother + Wreath)
  const emblemRes = await traceFile(path.join(__dirname, 'clean_emblem.png'), 'logo-emblem');
  // Copy emblem to default logo-dark.svg and logo-light.svg so header/footer icons are large and clear
  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), emblemRes.darkSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), emblemRes.lightSvg, 'utf8');
  fs.copyFileSync(path.join(publicDir, 'logo-emblem-dark.png'), path.join(publicDir, 'logo-icon.png'));

  // 2. Trace Full Logo (Emblem + Tagline "A place where healing starts")
  await traceFile(path.join(__dirname, 'clean_full.png'), 'logo-full');
  fs.copyFileSync(path.join(publicDir, 'logo-full-dark.png'), path.join(publicDir, 'logo.png'));

  console.log('All vector SVG logos and PNGs generated successfully with precision carving!');
}

main().catch(console.error);
