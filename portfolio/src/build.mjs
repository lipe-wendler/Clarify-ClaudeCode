// Gera o PDF do portfólio a partir de portfolio.html usando o Chromium do Playwright.
// Uso: node portfolio/src/build.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); }
catch { playwright = require(path.join(execSync('npm root -g').toString().trim(), 'playwright')); }

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, 'portfolio.html');
const out = path.join(here, '..', 'Portfolio_Felipe_Wendler.pdf');

const browser = await playwright.chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + src, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });

if (process.argv.includes('--preview')) {
  await page.setViewportSize({ width: 794, height: 1123 });
  const pages = await page.$$('section.page');
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({ path: path.join(process.argv[process.argv.indexOf('--preview') + 1], `p${i + 1}.png`) });
  }
}
await browser.close();
console.log('PDF gerado em', out);
