import puppeteer from 'puppeteer';

const scrapeFontDescription = async (fontName) => {
  const formattedFontName = fontName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('+');

const url = `https://fonts.google.com/specimen/${formattedFontName}/about`;

  try {
    console.log(`Tentative de récupération de la page pour ${fontName} depuis ${url}`);

    // Lancer Puppeteer pour charger la page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Aller à l'URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Attendre que la description de la police soit chargée
    await page.waitForSelector('gf-html-view[itemprop="description"]');

    // Extraire la description depuis le DOM après le rendu de la page
    const description = await page.evaluate(() => {
      const descriptionElement = document.querySelector('gf-html-view[itemprop="description"]');
      if (descriptionElement) {
        return descriptionElement.innerText.trim();
      }
      return null;
    });

    await browser.close();

    if (description) {
      return description;
    } else {
      return null;
    }
  } catch (error) {
  }
};

export default defineEventHandler(async (event) => {
  const fontName = event.context.params.fontName;

  if (!fontName) {
    return { error: 'Le nom de la police est requis.' };
  }

  const description = await scrapeFontDescription(fontName);
  
  if (description) {
    return { description };
  } else {
    return { error: 'Impossible de récupérer la description.' };
  }
});
