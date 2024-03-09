const puppeteer = require('puppeteer');
const config = require('./config'); // Импорт файла config.js

describe('catalog products page', () => {
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
        await page.waitForSelector('#category', { timeout: config.timeout });
        const category = await page.$$('#category > *');
        for (const c of category) {
            console.log(c);
            await c.click();
            await page.waitForSelector('#products', { timeout: config.timeout });
            const elements = await page.$$('#products > *');
            expect(elements.length).toBeGreaterThan(0);
        }
    }, config.timeout);
});
