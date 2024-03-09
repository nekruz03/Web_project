const puppeteer = require('puppeteer');
const config = require('./config.js');

describe('cart page', () => {
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
        await page.goto(`${global.BASE_URL}/cart`);
        await page.waitForSelector('#title', { timeout: config.timeout });
        const html = await page.$eval('#title', (e) => e.innerHTML);

        expect(html).toBe('Корзина');
    }, config.timeout);

    test('add one item in cart', async () => {
        await page.goto(`${global.BASE_URL}/catalog/1`);
        await page.waitForSelector('#addToCart', { timeout: config.timeout });
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto(`${global.BASE_URL}/cart`);
        await page.waitForSelector('#itemsInCart', { timeout: config.timeout });
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(1);
    }, config.timeout);

    test('add two same items in cart', async () => {
        await page.goto(`${global.BASE_URL}/catalog/1`);
        await page.waitForSelector('#addToCart', { timeout: config.timeout });
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await addToCartButton.click();
        await page.goto(`${global.BASE_URL}/cart`);
        await page.waitForSelector('button', { timeout: config.timeout });
        const buttons = await page.$$('button');
        const count = await (await buttons[1].getProperty('textContent')).jsonValue();
        expect(count).toBe('3');
    }, config.timeout);

    test('add two different items in cart', async () => {
        await page.goto(`${global.BASE_URL}/catalog/1`);
        await page.waitForSelector('#addToCart', { timeout: config.timeout });
        let addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto(`${global.BASE_URL}/catalog/7`);
        await page.waitForSelector('#addToCart', { timeout: config.timeout });
        addToCartButton = await page.$('#addToCart');
        await addToCartButton.click();
        await page.goto(`${global.BASE_URL}/cart`);
        await page.waitForSelector('#itemsInCart', { timeout: config.timeout });
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(2);
    }, config.timeout);

    test('test form', async () => {
        await page.goto(`${global.BASE_URL}/catalog/1`);
        await page.waitForSelector('#addToCart', { timeout: config.timeout });
        const addToCartButton = await page.$('#addToCart');

        await addToCartButton.click();
        await page.goto(`${global.BASE_URL}/cart`);
        await page.type('#input1', 'a');
        await page.type('#input2', '89999999999');
        await page.type('#input3', 'a');
        await page.type('#input4', 'a@gmail.com');
        await page.type('#input5', 'a');
        const buttons = await page.$$('button');

        await buttons[4].click();
        
        function delay(time) {
            return new Promise(function (resolve) {
                setTimeout(resolve, time);
            });
        }
        await delay(2000);
        const itemsInCart = await page.$$('#itemsInCart > *');

        expect(itemsInCart.length).toBe(0);
    }, config.timeout);
});
