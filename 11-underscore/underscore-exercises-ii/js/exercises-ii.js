var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// Sort the ` people ` by 'uid'
console.log( _(people).sortBy('uid') );

// Group the random words by the lower case version of their first letter
const groupedWords = _(words).groupBy(function (w) {
  // return the key that each item should be grouped under
  return w[0].toLowerCase();
});
console.log(groupedWords);

// Check to see if all the words have more than 3 characters
const allMoreThan3 = _(words).every(function (w) {
  return w.length > 3;
});
console.log(allMoreThan3);

// Check if some words are over twenty characters long
const enoughCharacters = _(words).some(function (w) {
  return w.length > 20;
});
console.log( enoughCharacters );

// Get an array of all of the uids in ` people `
console.log( _(people).pluck('uid') );

// Find the person with the highest uid
console.log( _(people).max('uid') );
// Return an object that says how many even numbers and how many odd numbers there are in ` numbers `

const oddEvenCounts = _(numbers).countBy(function (n) {
  // if (n % 2 === 0) {
  //   return 'even';
  // } else {
  //   return 'odd';
  // }
  return (n % 2 === 0) ? 'even' : 'odd';
});
console.log( oddEvenCounts );

// Get three random numbers out of ` numbers `
console.log( _(numbers).sample(3) );
