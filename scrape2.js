const request = require('request');
const cheerio = require('cheerio');

request('https://www.prontocombustiveis.com.br/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const frases = $('.frases');

        // console.log(frases);
        
        // console.log(frases.text());
        
        // const output = frases.find('b').text();
        
        // const output = frases.children('b').text();
        // console.log(output);

        // const output = frases.children('br')
        // .next()
        // .text();
        
        // console.log(output);

        const output = frases.children('br')
        .next()
        .text();
        
        console.log(output);
    }
});