import fs from "fs";
import path from "path";
import sharp from "sharp";


const inputDir = path.join(process.cwd(), "/public");
const outputDir = path.join(process.cwd(), "public/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    if (!/\.(jpg|jpeg|png)$/i.test(file)) {
      console.log(`⏭️  Skipping: ${file}`);
      continue;
    }

    const outputPath = path.join(
      outputDir,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    try {
      await sharp(inputPath)
        .resize({ width: 1920 })
        .webp({ quality: 70 }) 
        .toFile(outputPath);

      console.log(`✅ Optimized: ${file} -> ${outputPath}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error);
    }
  }
}

optimizeImages(); 