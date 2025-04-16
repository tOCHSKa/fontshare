// import fs from 'fs';
// import path from 'path';
// import puppeteer from 'puppeteer';

// const formatFontNameForUrl = (name) =>
//   name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('+');

// const scrapeDescription = async (fontName) => {
//   const url = `https://fonts.google.com/specimen/${formatFontNameForUrl(fontName)}/about`;

//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox'] // utile pour Netlify, Vercel, etc.
//   });

//   const page = await browser.newPage();

//   try {
//     await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });

//     await page.waitForSelector('gf-html-view[itemprop="description"]', {
//       timeout: 10000
//     });

//     const desc = await page.evaluate(() => {
//       const el = document.querySelector('gf-html-view[itemprop="description"]');
//       return el?.innerText?.trim() || null;
//     });

//     return desc;
//   } catch (error) {
//     console.error(`Erreur lors du scraping pour ${fontName} :`, error.message);
//     return null;
//   } finally {
//     await browser.close();
//   }
// };

// export default defineEventHandler(async () => {
//   const filePath = path.resolve('./assets/data/newdesc.json');
//   const rawData = fs.readFileSync(filePath, 'utf-8');
//   const fontObj = JSON.parse(rawData);

//   // Transformer l'objet { Roboto: {...}, Inter: {...} } → tableau
//   const fontArray = Object.values(fontObj);

//   for (const font of fontArray) {
//     console.log(`Scraping ${font.family}...`);
//     try {
//       font.description = await scrapeDescription(font.family);
//     } catch (err) {
//       console.error(`Erreur pour ${font.family}`, err);
//       font.description = null;
//     }
//   }

//   // Écrire dans un nouveau fichier
//   const outputPath = path.resolve('fonts-with-desc.json');
//   fs.writeFileSync(outputPath, JSON.stringify(fontArray, null, 2));

//   return {
//     message: 'Descriptions ajoutées à toutes les polices.',
//     total: fontArray.length
//   };
// });
