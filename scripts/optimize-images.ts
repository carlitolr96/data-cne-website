import fs from "fs";
import path from "path";
import sharp from "sharp";

const folders = ["portadas-pen", "portadas-gd", "portadas-arn", "img-difucion"];
const outputDir = path.join(process.cwd(), "public", "optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  for (const folder of folders) {
    const inputDir = path.join(process.cwd(), "public", folder);

    if (!fs.existsSync(inputDir)) {
      console.warn(`⚠️  La carpeta no existe: ${inputDir}`);
      continue;
    }

    const files = fs.readdirSync(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);

      if (!/\.(jpg|jpeg|png)$/i.test(file)) {
        console.log(`⏭️  Skipping: ${file}`);
        continue;
      }

      const outputPath = path.join(
        outputDir,
        `${folder}-${file.replace(/\.(jpg|jpeg|png)$/i, ".webp")}`
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
}

optimizeImages();
