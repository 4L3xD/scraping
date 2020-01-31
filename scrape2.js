const request = require('request');
const cheerio = require('cheerio');

request('https://www.prontocombustiveis.com.br/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const frases = $('.frases');

        // console.log(frases);
        console.log(frases.html());
    }
});