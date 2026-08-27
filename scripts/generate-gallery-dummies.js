const fs = require('fs');
const path = require('path');

const items = [
  { id: 1, title: "Pregnancy Care & Exercises Chart", subtitle: "Patient Education", w: 600, h: 420 },
  { id: 2, title: "Consulting Room & Diagnostic Suite", subtitle: "Consulting Suite", w: 600, h: 760 },
  { id: 3, title: "Doctor Consultation Desk", subtitle: "Consulting Suite", w: 600, h: 540 },
  { id: 4, title: "Clinic Facility & Entrance", subtitle: "Clinic Exterior", w: 600, h: 720 },
  { id: 5, title: "Consultation Suite & Examination Area", subtitle: "Consulting Suite", w: 600, h: 460 },
  { id: 6, title: "Comfortable Patient Waiting Lounge", subtitle: "Waiting Lounge", w: 600, h: 740 },
  { id: 7, title: "Compassionate Doctor-Patient Interaction", subtitle: "Consulting Suite", w: 600, h: 440 },
  { id: 8, title: "Newborn Delivery & Maternity Care", subtitle: "Patient Care", w: 600, h: 800 },
  { id: 9, title: "Sterile Surgical & Obstetric Suite", subtitle: "Patient Care", w: 600, h: 520 },
];

items.forEach(item => {
  const cy = Math.round(item.h * 0.42);
  const ty1 = cy + 75;
  const ty2 = ty1 + 24;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${item.w} ${item.h}" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A1D6D"/>
      <stop offset="60%" stop-color="#381552"/>
      <stop offset="100%" stop-color="#260C38"/>
    </linearGradient>
    <radialGradient id="glow${item.id}" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#7C25B8" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#260C38" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${item.w}" height="${item.h}" fill="url(#bgGrad${item.id})"/>
  <rect width="${item.w}" height="${item.h}" fill="url(#glow${item.id})"/>
  
  <g opacity="0.07" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="120" x2="${item.w}" y2="120"/>
    <line x1="0" y1="240" x2="${item.w}" y2="240"/>
    <line x1="0" y1="360" x2="${item.w}" y2="360"/>
    <line x1="0" y1="480" x2="${item.w}" y2="480"/>
    <line x1="0" y1="600" x2="${item.w}" y2="600"/>
    <line x1="120" y1="0" x2="120" y2="${item.h}"/>
    <line x1="240" y1="0" x2="240" y2="${item.h}"/>
    <line x1="360" y1="0" x2="360" y2="${item.h}"/>
    <line x1="480" y1="0" x2="480" y2="${item.h}"/>
  </g>

  <circle cx="${item.w / 2}" cy="${cy}" r="48" fill="#FFFFFF" fill-opacity="0.12" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="2"/>
  
  <g transform="translate(${item.w / 2 - 20}, ${cy - 20})" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
    <path d="M38 31a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h6l3-5h12l3 5h6a3 3 0 0 1 3 3z"/>
    <circle cx="20" cy="21" r="7"/>
  </g>

  <text x="${item.w / 2}" y="${ty1}" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" letter-spacing="1.5">DR. DEEPIKA LALWANI</text>
  <text x="${item.w / 2}" y="${ty2}" text-anchor="middle" fill="#D8B4F8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" letter-spacing="2" opacity="0.85">${item.subtitle.toUpperCase()}</text>
</svg>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'images', `gallery-dummy-${item.id}.svg`), svg);
});

console.log("Successfully generated 9 dummy gallery SVGs!");
