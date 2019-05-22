const fs = require('fs');
const axios = require('axios');
const $ = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

axios( sourceURL ).then((response) => {
  const html = response.data;
  const $rows = $('table table tr:nth-child(n+2)', html);

  const entries = [];

  $rows.each(function () {
    $cells = $('td', this); // An array of 4 <td> cells.
    const entry = {
      sound: $cells.eq(0).text(),
      description: $cells.eq(1).text(),
      source: $cells.eq(2).text(),
      article: $cells.eq(3).text()
    };
    entries.push( entry );
  });

  // Pretty printing with 4 spaces of indentation
  fs.writeFile('./martin.json', JSON.stringify(entries, null, 4), () => {
    console.log(`martin.json saved (${ entries.length } entries)`);
  });
});
