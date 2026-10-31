import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const settings = JSON.parse(await readFile(resolve(root, 'site.config.json'), 'utf8'));
if (typeof settings.christmasLetterBanner !== 'boolean') {
  throw new Error('site.config.json: christmasLetterBanner must be true or false.');
}

await mkdir(output, { recursive: true });
// Explicit public allowlist: never publish project files, credentials or originals.
for (const name of [
  'index.html', 'style.css', 'language.js', 'site-assets', 'play', 'datenschutz',
  'datenschutz-website', 'impressum', 'terms', 'daten-loeschen', 'delete-data'
]) {
  await cp(resolve(root, name), resolve(output, name), { recursive: true });
}

let html = await readFile(resolve(root, 'index.html'), 'utf8');
const banner = /<!-- download-banner:start -->[\s\S]*?<!-- download-banner:end -->/g;
if ([...html.matchAll(banner)].length !== 1) throw new Error('Expected exactly one download banner.');
if (!settings.christmasLetterBanner) html = html.replace(banner, '');
await writeFile(resolve(output, 'index.html'), html);
console.log(`Public website prepared; Christmas letter banner ${settings.christmasLetterBanner ? 'enabled' : 'disabled'}.`);
