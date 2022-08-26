const puppeteer = require('puppeteer');

(async () => {
    let tmmUrl = 'https://thomasmaestas.net';

    let browser = await puppeteer.launch({headless: false });



    let page = await browser.newPage();
    await page.goto(tmmUrl, {waitUntil: 'networkidle2'}) // less than 2 network calls in few seconds


    let data = await page.evaluate(() => {
        let welcome = document.querySelector('div[id="welcome"] > h3').innerText; // online check
        return {
            welcome
         }
        });
    console.log(data);
    // debugger;
     await browser.close()

    console.log("TMM welcome text : "+ welcome)
})();

cron.schedule("*/5 * * * * *", start)
