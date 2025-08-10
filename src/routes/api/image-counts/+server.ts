import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const STATIC_IMG_PATH = 'static/img/logotypes';
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.bmp'];

function isImageFile(filename: string) {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

// Returns count of image files in a directory
function countImagesInFolder(folderPath: string) {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) return 0;
  const files = fs.readdirSync(folderPath);
  return files.filter(f => {
    const fullPath = path.join(folderPath, f);
    return fs.statSync(fullPath).isFile() && isImageFile(f);
  }).length;
}

// Returns first image file found or null
function getFirstImageInFolder(folderPath: string): string | null {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) return null;
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    if (isImageFile(file)) return file;
  }
  return null;
}

export const GET: RequestHandler = () => {
  const results: Record<string, { count: number; firstImage?: string }> = {};

  const baseDir = path.resolve(STATIC_IMG_PATH);

  if (!fs.existsSync(baseDir) || !fs.statSync(baseDir).isDirectory()) {
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const entries = fs.readdirSync(baseDir);

  for (const entry of entries) {
    const folderPath = path.join(baseDir, entry);
    if (fs.statSync(folderPath).isDirectory()) {
      const count = countImagesInFolder(folderPath);
      if (count > 0) {
        const firstImage = getFirstImageInFolder(folderPath);
        results[`logotypes/${entry}`] = {
          count,
          firstImage: firstImage ? `/img/logotypes/${entry}/${firstImage}` : undefined
        };
      }
    }
  }

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' }
  });
};
