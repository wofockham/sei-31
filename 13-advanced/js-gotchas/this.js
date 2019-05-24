const groucho = {
  fullName: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullName }`;
  }
};

console.log( groucho.greeting() ); // Works: because of the call site.

const unboundGreeting = groucho.greeting;
console.log( unboundGreeting() ); // This is window/global -- there is no call site.

// .bind() /////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind( groucho );
console.log( boundGreeting() ); // Works: because of the .bind()

// .call() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call( groucho ) );
console.log( unboundGreeting.call( {fullName: 'Harpo Marx'} ) );

// .apply() ////////////////////////////////////////////////////////////////////
const numbers = [1, 4, 6, 8, 9, 1001];

// es5
Math.max.apply( Math, numbers ); // .apply will turn an array of args into a list of args.
// es6
Math.max( ...numbers ); // the ... spread operator also turns an array of args into a list of args.
