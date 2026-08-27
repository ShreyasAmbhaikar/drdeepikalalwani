const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'src', 'app');

const serviceDirs = [
  'cancer-screening-in-kalyani-nagar',
  'cervical-cancer-vaccination-screening-in-kalyani-nagar',
  'contraception-advice-in-kalyani-nagar',
  'family-planning-center-in-kalyani-nagar',
  'high-risk-pregnancy-management-in-kalyani-nagar',
  'hysteroscopy-in-kalyani-nagar',
  'infertility-iui-ivf-in-kalyani-nagar',
  'lactational-counselling-in-kalyani-nagar',
  'laparoscopic-procedures-in-kalyani-nagar',
  'lscs-caesarean-section-in-kalyani-nagar',
  'menstrual-cycle-problems-in-kalyani-nagar',
  'menstrual-hygiene-in-kalyani-nagar',
  'mtp-d-e-services-in-kalyani-nagar',
  'normal-delivery-in-kalyani-nagar',
  'pcod-pcos-care-in-kalyani-nagar',
  'pelvic-infections-treatment-in-kalyani-nagar',
  'pre-conceptional-counselling-in-kalyani-nagar',
  'pregnancy-care-in-kalyani-nagar',
  'pubertal-counselling-in-kalyani-nagar',
  'scarless-hysterectomy-in-kalyani-nagar',
  'tubal-ligation-reversal-in-kalyani-nagar'
];

function transformContent(content) {
  let updated = content;

  // Replace links from -in-keshav-nagar to -in-kalyani-nagar
  updated = updated.replace(/-in-keshav-nagar/g, '-in-kalyani-nagar');

  // Replace Doctor Names and Clinic Names
  updated = updated.replace(/Dr\.\s*Poonam's\s*Women's\s*Clinic/gi, "Dr. Deepika Lalwani's Clinic");
  updated = updated.replace(/Dr\s*Poonam's\s*Women's\s*Clinic/gi, "Dr. Deepika Lalwani's Clinic");
  updated = updated.replace(/Dr\.\s*Poonam/gi, "Dr. Deepika Lalwani");
  updated = updated.replace(/Dr\s*Poonam/gi, "Dr. Deepika Lalwani");
  updated = updated.replace(/Dr\.\s*Poonam\s*\(Nagwani\)/gi, "Dr. Deepika Lalwani(Nagwani)");
  updated = updated.replace(/Dr\s*Poonam\s*\(Nagwani\)/gi, "Dr. Deepika Lalwani(Nagwani)");

  // Replace Doctor Credentials
  updated = updated.replace(/MBBS,\s*DGO,\s*PGDMCH/gi, "MBBS, DGO (Mumbai)");
  updated = updated.replace(/Senior\s*Consultant\s*Obstetrician\s*&\s*Gynecologist/gi, "Consultant Obstetrician & Gynecologist");
  updated = updated.replace(/15\+\s*years\s*of\s*experience/gi, "5+ years of experience");
  updated = updated.replace(/15\+\s*years\s*of\s*clinical\s*expertise/gi, "5+ years of clinical expertise");
  updated = updated.replace(/15\+\s*years\s*of\s*dedicated\s*practice/gi, "5+ years of dedicated practice");
  updated = updated.replace(/10\+\s*years\s*of\s*expertise/gi, "5+ years of expertise");
  updated = updated.replace(/15\+\s*Years/gi, "5+ Years");
  updated = updated.replace(/10\+\s*Years/gi, "5+ Years");
  updated = updated.replace(/\+15\s*Years\s*of\s*Experience/gi, "5+ Years of Clinical Excellence");

  // Replace Google Reviews
  updated = updated.replace(/42\s*Reviews/gi, "105+ Reviews");
  updated = updated.replace(/4\.9\s*Rating/gi, "4.9 Rating");
  updated = updated.replace(/5\.0/g, "4.9");
  updated = updated.replace(/Based on 42 Reviews/gi, "Based on 105+ Google Reviews");

  // Replace Geolocation and Local SEO keywords
  updated = updated.replace(/Keshav\s*Nagar\s*&\s*Mundhwa/gi, "Kalyani Nagar & Wadgaon Sheri");
  updated = updated.replace(/Keshav\s*Nagar\s*and\s*Mundhwa/gi, "Kalyani Nagar and Wadgaon Sheri");
  updated = updated.replace(/Keshav\s*Nagar,\s*Mundhwa/gi, "Kalyani Nagar, Wadgaon Sheri");
  updated = updated.replace(/Keshav\s*Nagar,\s*Mundhwa,\s*Pune/gi, "Kalyani Nagar, Wadgaon Sheri, Pune");
  updated = updated.replace(/Keshav\s*Nagar/gi, "Kalyani Nagar");
  updated = updated.replace(/Mundhwa/gi, "Wadgaon Sheri");
  updated = updated.replace(/Mundhawa/gi, "Wadgaon Sheri");

  // Address replacements
  updated = updated.replace(/Shop\s*No\s*33,\s*Shopping\s*Complex,\s*Mantra\s*Mesmer\s*Rd[^,\n]+,\s*Pune,\s*Maharashtra\s*411036/gi, 
    "219, 2nd floor, W10 Tower, The Collection by Brahma Corp, New Kalyani Nagar, Digambar Nagar, Wadgaon Sheri, Pune, Maharashtra 411014");

  // Phone replacements
  updated = updated.replace(/09711929529|097119\s*29529|9711929529/g, "9359264895");
  updated = updated.replace(/08149661830|081496\s*61830|8149661830/g, "9359264895");

  return updated;
}

let modifiedCount = 0;

for (const dir of serviceDirs) {
  const filePath = path.join(appDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const original = fs.readFileSync(filePath, 'utf8');
    const updated = transformContent(original);
    if (original !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      modifiedCount++;
      console.log(`Updated: ${dir}/page.tsx`);
    } else {
      console.log(`No changes needed: ${dir}/page.tsx`);
    }
  } else {
    console.warn(`File not found: ${filePath}`);
  }
}

console.log(`Successfully updated ${modifiedCount} service pages.`);
