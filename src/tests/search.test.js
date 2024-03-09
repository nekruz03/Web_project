const puppeteer = require('puppeteer');
const config = require('./config');
const fetch = require('node-fetch');

describe('Search functionality', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false, slowMo: 100 });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('The search returns the results correctly', async () => {
        const keyword = 'a';
        await page.goto(global.BASE_URL);
        await page.waitForSelector('._input_auqbu_1');

        await page.type('._input_auqbu_1', keyword);
        await page.keyboard.press('Enter');
        try {
            await page.waitForSelector('.seacrhedProduct', { timeout: config.timeout });
            console.log('Product(s) found.');
        } catch (error) {
            cconsole.error('No product found for the specified search.');
            return; 
        }

        const productTitles = await page.evaluate(() => {
            const titles = [];
            const productElements = document.querySelectorAll('.seacrhedProduct');
            productElements.forEach(element => {
                titles.push(element.textContent.trim());
            });
            return titles;
        });

        console.log('Product Titles:', productTitles);

        const productData = await fetchProductData();

        const descriptionsMap = {};
        productData.forEach(product => {
            if (productTitles.includes(product.name)) {
                descriptionsMap[product.name] = product.description;
            }
        });
        
        let isError = false;

        for (let i = 0; i < productTitles.length; i++) {
            const title = productTitles[i];
            const description = descriptionsMap[title];
            console.log(title, description);
            if (!title.includes(keyword) && !description.includes(keyword)) {
                console.log(`Keyword "${keyword}" not found in product "${title}" title or description.`);
                isError = true;
            }
        }

        if (isError) {
            console.error('Search functionality is not working properly.');
        } else {
            console.log('Search functionality is working correctly.');
        }

        expect(!isError).toBe(true);
    }, 30000);

    async function fetchProductData() {
        const response = await fetch('http://localhost:8000/api/v1/product/');
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        return data;
    }
});
