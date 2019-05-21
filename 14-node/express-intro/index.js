const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', 'ejs'); // See documentation.

const PORT = 1337;

// Get requests, EJS views, passing data to views.
server.get('/', (req, res) => {
  console.log('GET /');
  const brothers = 'Groucho Harpo Chico Zeppo Gummo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', {randomBrother: randomBrother}); // "Instance variables"
});

server.get('/hello/:name', (req, res) => {
  console.log(`Saying hello to ${ req.params.name }`);
  res.render('home.ejs', {randomBrother: req.params.name});
});

server.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }
  res.render('calculator.ejs', {answer}); // {answer: answer}
});

server.get('/info', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// You can use a regular expression for the path.
// You will probably never use this.
server.get(/[0-9]+/, (req, res) => {
  res.send('You asked for a number');
});

// External APIs and callback efficiency.
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { trivia: response.data });
  });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));
