const express = require('express');
const ejs = require('ejs');

const server = express();
server.set('view-engine', 'ejs'); // See documentation.

const PORT = 1337;

server.get('/', (req, res) => {
  console.log('GET /');
  res.render('home.ejs');
});

server.get('/about', (req, res) => {
  console.log('GET /about');
  res.send('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));
