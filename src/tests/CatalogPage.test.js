const puppeteer = require('puppeteer');
const config = require('./config'); // Импорт файла config.js

describe('catalog page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: 'new' });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('page loads correctly', async () => {
        await page.goto(`${global.BASE_URL}/catalog`);
        await page.waitForSelector('#title', { timeout: config.timeout });
        const html = await page.$eval('#title', (e) => e.innerHTML);

        expect(html).toBe('Каталог');
    }, config.timeout);
});
