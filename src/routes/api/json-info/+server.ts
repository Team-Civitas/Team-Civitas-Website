import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const staticFolder = path.join(process.cwd(), 'static');  // adjust path to your static folder

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.svg'];

function isImageFile(filename: string) {
  return IMAGE_EXTENSIONS.some(ext => filename.toLowerCase().endsWith(ext));
}

function countImagesInFolder(folderPath: string): number {
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) return 0;

  const files = fs.readdirSync(folderPath);
  return files.filter(file => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isFile() && isImageFile(file);
  }).length;
}

function countImagesWithPaths(rootFolder: string, basePath = ''): Record<string, number> {
  const results: Record<string, number> = {};

  if (!fs.existsSync(rootFolder) || !fs.statSync(rootFolder).isDirectory()) {
    return results;
  }

  for (const entry of fs.readdirSync(rootFolder)) {
    const subfolderPath = path.join(rootFolder, entry);
    if (fs.statSync(subfolderPath).isDirectory()) {
      const relativePath = basePath ? `${basePath}/${entry}` : entry;

      const imageCount = countImagesInFolder(subfolderPath);
      if (imageCount > 0) {
        results[relativePath] = imageCount;
      }

      const nestedResults = countImagesWithPaths(subfolderPath, relativePath);
      Object.assign(results, nestedResults);
    }
  }

  return results;
}

export const GET: RequestHandler = () => {
  const data = countImagesWithPaths(path.join(staticFolder, 'img'));
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
