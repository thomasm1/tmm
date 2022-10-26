const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const cron = require('node-cron');

 const startE2E = () => {
    let tmmUrl = 'https://thomasmaestas.net';

    let browser = await puppeteer.launch({headless: false });
    let page = await browser.newPage();
    await page.goto(tmmUrl, {waitUntil: 'networkidle2'}) // less than 2 network calls in few seconds
    await page.screenshot({ path: "tmmUptime.png" })

    // check navbars
    const navs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.nav.navbar-nav a')).map(x => x.textContent);
    })
    await fs.writeFile('navs.txt', navs.join('\r\n'));

    // check text
    let data = await page.evaluate(() => {
        let welcome = document.querySelector('div[id="welcome"] > h3').innerText; // online check
        return {
            welcome
         }
        });

    // check uptime of imgs hosted on AWS, with diff URL
    const imgs = await page.$$eval('img', (imgs) => {
      return imgs.map(x => x.src)
    })
    for (const img of imgs) {
      const imagePage = await page.goto(photo);
      await fs.writeFile(img.split('/').pop(), await imagePage.buffer());
    }

    // check links
    await page.click("a#blog")
    await page.waitForNavigation()
    await page.screenshot({ path: "blog-redirect.png" })
    
    // console.log(data);
    // debugger;
     await browser.close()

    console.log("TMM welcome text : "+ welcome)
}
cron.schedule("*/5 * * * * *", startE2E)
