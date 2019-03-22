// A factory copies values into simple objects and ensures the objects have
// the correct and uniform shape.
// They also save on typing.

// n: name, a: age, f: furColor
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline', // constants work too
    meow: function () {
      console.log('Meow, my name is ' + this.name);
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( cuteCats[i].furColor );
};

// Prototypal Inheritance //////////////////////////////////////////////////////
// Interesting/Historic BUT NOT SUPER IMPORTANT TODAY

// Capital C in Cat is a convention meaning that this is a Cat constructor
const Cat = function (n, a, f) {
  // The "this" object is created automagically for you.
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log("Meow, my name is " + this.name);
  }
  // No need for a return statement! Isn't that fantastic!
}

const cooper = new Cat('Cooper', 3, 'striped grey');
const audrey = new Cat('Audrey', 3, 'striped grey');

// Prototypal inheritance allows us to extend the "prototype" after we define it.
Cat.prototype.species = 'feline';
// now all cats are feline:
console.log(audrey.species);

Cat.prototype.eat = function (food) {
  console.log('Yum, I love to eat ' + food);
};
audrey.eat('brown mushy stuff');
cooper.eat('brown mushy stuff');
