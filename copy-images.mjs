import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = 'C:\\Users\\ITSE ARUEYINGHO\\.gemini\\antigravity\\brain\\0d213e66-1148-4da8-b05d-06863faedbfd';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  "tones_hero_1780087989204.png",
  "tones_hero_2_1780090094339.png",
  "tones_hero_3_1780090115187.png",
  "tones_about_1_1780088082361.png",
  "tones_about_2_1780088099511.png",
  "tones_about_3_1780088135004.png",
  "tones_projects_1_1780088032709.png",
  "tones_projects_2_1780088154405.png",
  "tones_projects_3_1780088175129.png",
  "tones_projects_4_1780088206662.png",
  "tones_careers_1780088014269.png"
];

console.log('Copying original generated images to public/images...');
let copiedCount = 0;

filesToCopy.forEach(file => {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file}`);
    copiedCount++;
  } else {
    console.log(`❌ Missing ${file} in source directory`);
  }
});

console.log(`\nDone! Successfully copied ${copiedCount} out of ${filesToCopy.length} images.`);
