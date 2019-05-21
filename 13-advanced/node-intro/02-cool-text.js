const readline = require('readline');
const chalk = require('chalk'); // Alternative to npm install colors
const figlet = require('figlet');

// It really is this much trouble
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (response) => {

  console.log(
    chalk.red(
      figlet.textSync(response, {
        font: 'slant',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );

  rl.close();
});
