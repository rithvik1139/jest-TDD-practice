// import the future function (not yet written in app.js) for testing
const math = require('./app.js');
// const multiply = require('./app.js');
// const pupeteer = require('puppeteer'); *not installed yet

describe("math", () => {
    test('should add 1 and 2 and get 3', () => {
      expect(math[0](1,2)).toBe(3);
    });

    test('should multiply 2 and 3 and get 6', () => {
      expect(math[1](2,3)).toBe(6);
    })

    test('should subtract 7 and 3 and get 4', () => {
      expect(math[2](7,3)).toBe(4);
    })
    // // after npm i puppeteer 
    // test('puppeteer-jest example', async () => {
    //   const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 80,
    //     args: ['--window-size=1920,1080']
    //   });
    //   const page = await browser.newPage();
    //   await page.goto('file:/// (url-link)');
    //   await page.click(''); *for button
    //   await page.type(''); *for input
    //   const result = await page.$eval('(some class)', element => element.textContent); *$eval is to select an element
    //   expect(result).toBe('');
    // }, 10000); *max timeout


});