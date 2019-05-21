const express = require('express');
const ejs = require('ejs');
const IEX = require('iex-api');
const _fetch = require('isomorphic-fetch');

const iex = new IEX.IEXClient(_fetch);

const PORT = 1337;

const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  const symbol = req.query.symbol; // Thanks ANT
  iex.stockQuote(symbol).then((quote) => {
    res.render('info.ejs', {symbol, quote}); // {symbol: symbol, quote: quote}
  });
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));
