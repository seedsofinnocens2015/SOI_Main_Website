import { promises as fs } from 'node:fs';
import path from 'node:path';

const appDirectory = path.resolve('src/app');
const marker = '// AUTO-GENERATED SEO RAW TEMPLATE - DO NOT EDIT';
const cleanOnly = process.argv.includes('--clean');

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }
  return files;
}

function routeFromDirectory(directory) {
  const relative = path.relative(appDirectory, directory);
  const segments = relative
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')));
  return segments.length ? `/${segments.join('/')}` : '/';
}

async function removeGeneratedTemplates(files) {
  const templates = files.filter((file) => path.basename(file) === 'template.jsx');
  for (const templatePath of templates) {
    const content = await fs.readFile(templatePath, 'utf8');
    if (content.startsWith(marker)) await fs.unlink(templatePath);
  }
}

const initialFiles = await walk(appDirectory);
await removeGeneratedTemplates(initialFiles);

if (!cleanOnly) {
  const files = await walk(appDirectory);
  const pageFiles = files.filter((file) => /^page\.(js|jsx)$/.test(path.basename(file)));

  for (const pageFile of pageFiles) {
    const directory = path.dirname(pageFile);
    const relative = path.relative(appDirectory, directory);
    if (relative.split(path.sep).some((segment) => segment.includes('['))) continue;

    const templatePath = path.join(directory, 'template.jsx');
    try {
      await fs.access(templatePath);
      continue;
    } catch {
      // No user-owned template exists; create the generated SEO wrapper.
    }

    const pageUrl = routeFromDirectory(directory);
    const content = `${marker}
import SeoRawHead from '@/app/Components/SeoRawHead';

export default function GeneratedSeoTemplate({ children }) {
  return (
    <>
      <SeoRawHead pageUrl=${JSON.stringify(pageUrl)} />
      {children}
    </>
  );
}
`;
    await fs.writeFile(templatePath, content, 'utf8');
  }
}
