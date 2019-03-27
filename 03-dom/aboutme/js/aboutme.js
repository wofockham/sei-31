document.body.style.fontFamily = "Arial, sans serif";

// Caching the DOM node
const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'Marx Brothers, butterflies, cats';
document.getElementById('hometown').innerHTML = 'Sydney';

const facts = document.getElementsByTagName('li');
for (let i = 0; i < facts.length; i++) {
  facts[i].className = 'listitem';
};

// document.body.innerHTML += '<img src="http://fillmurray.com/500/700">';
const bill = document.createElement('img'); // detached DOM node
bill.src = 'http://fillmurray.com/500/700';
document.body.appendChild(bill);
