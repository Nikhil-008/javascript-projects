'use strict';

/*

// default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // THESE ARE OBJECTS OR PARAMETER
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('NH123');
createBooking('NH123', 2, 800);
createBooking('NH123', 2);
createBooking('NH123', 5);
createBooking('NH123', undefined, 1000);


// passsing arguments : values vs reference
const flight = 'NH234';
const nikhil = {
  name: 'Nikhil',
  passport: 2545524663,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'KK234';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2545524663) {
    alert('checked IN');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, nikhil);
// console.log(flight);
// console.log(nikhil); // here only name is changed the flight num is not changed

// //is thr sam as doing
// const flightNum = flight;
// const passenger = nikhil;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1545643454);
};
newPassport(nikhil);
checkIn(flight, nikhil);


// first class & higher order functions

// functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); // ... is spread operator
};

//higher order functions

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name} `);
};

transformer('javascript is the best', upperFirstWord);
transformer('javascript is the best', oneWord);

// JS uses call backs functions all the time

const high5 = function () {
  console.log('hi');
};

document.body.addEventListener('click', high5);
['nikhil', 'chinna', 'chinni'].forEach(high5);


// functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};
const greeterHey = greet('hey');
greeterHey('nikhil');
greeterHey('chinni');
greet('hello')('nikhil');

//challenge writing the above code in arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name} `);
greetArr('hI')('nikhil');


// the call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'gattadi nikhil');
lufthansa.book(230, 'chinni');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// does not work
// book(23, 'sarah williams');

//call method
book.call(eurowings, 23, 'sarika');
console.log(eurowings);

book.call(lufthansa, 239, 'mary');
console.log(lufthansa);

const swiss = {
  airline: 'swiss airline',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 288, 'kasam');
console.log(swiss);

// apply method we dont use this anymore in modern js

const flightData = [582, 'cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// THE BIND METHOD (IMP)
// book.call(eurowings, 23, 'sarika');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSA = book.bind(swiss);

bookEW(23, ' rudra');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gattadi Pallavi');
bookEW23('Gattadi Naveen');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23

console.log(addVat(100));
console.log(addVat(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: ' what is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  // this generates [0,0,0,0]. more in next section

  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);

    //register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

// closure property examples

(function () {
  const header = document.querySelector('h1'); // this fuunction is already executed and this will b e out of the stack, then how did the header variable worked in addevent, bcoz the function never looses the connection to the varibale that is existed at the function  birthplace
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
