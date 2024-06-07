const puppeteer = require('puppeteer');

async function scrapeMediumArticles(topic) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const url = `https://medium.com/search?q=${encodeURIComponent(topic)}`;
    
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForSelector('article', { timeout: 60000 });

    const articles = await page.evaluate(() => {
        const articleNodes = document.querySelectorAll('article');

        return Array.from(articleNodes).slice(0, 5).map(article => {

            const titleElement = article.querySelector('h2, h3'); 
            const title = titleElement ? titleElement.innerText : 'No title';

             const authorElement = article.querySelector('p');
             const author = authorElement ? authorElement.innerText : 'Unknown author';

            
            const dateElement = article.querySelector('time');
            const date = dateElement ? dateElement.getAttribute('datetime') : 'No date';
            
            
            const urlElement = article.querySelector('a');
            const url = urlElement ? urlElement.href : 'No URL';

            return { title, author, date, url };
        });
    });

    await browser.close();
    return articles;
}

module.exports = { scrapeMediumArticles };
