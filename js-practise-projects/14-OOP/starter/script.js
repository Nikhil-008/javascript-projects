'use strict';

/*
// constructor function and the new operator
//this is like blueprint

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this crating method inside constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - birthYear);
  //   };
};

// objects created with constructor function

const jonas = new Person('jonas', 1991);
console.log(jonas);

// what happens here
// 1) new {} is created
// 2) function is called, this = {}
// 3) {} linked to prototype
// 4) function automatically return {}

const nikhil = new Person('chinna', 1999);
console.log(nikhil);

const chinni = new Person('mammi', 1998);
console.log(chinni);

console.log(chinni instanceof Person);

// prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
nikhil.calcAge();
chinni.calcAge();
jonas.calcAge();
console.log(nikhil.__proto__);
console.log(nikhil.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(nikhil));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'homo species';
console.log(jonas.species, nikhil.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// prototypal inheritance and prototype chain

// prototypal inheritance on built in objects
console.log(nikhil.__proto__);

//object.prototype (top 0f prototype chain)
console.log(nikhil.__proto__.__proto__);
console.log(nikhil.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 8, 9, 10, 11]; // now array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique);


//challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

//ES6 classes

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  //instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`${this.firstName} iLoveYou`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}
const nikhil = new PersonCl('chinni gattadi', 1998);
console.log(nikhil.age);

console.log(nikhil);
nikhil.calcAge();
nikhil.greet();
const chinni = new PersonCl('gattadi nikhil', 1998);

// PersonCl.prototype.greet = function () {
//   console.log(`${this.firstName} iLoveYou`);
// };
console.log(nikhil.__proto__ === PersonCl.prototype);

// 1. classes are NOT hoisted
// 2. classes are first-class functions
//3. classes are executed in strict mode

// setters & gutters

const account = {
  owner: 'nikhil',
  movements: [50, 20, 44, 11, 143, 225],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 8;
console.log(account.movements);


// objects. create
// object literals

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = '1995';
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1998);
sarah.calcAge();

//challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.5;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new CarCl('ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

// inheritance btw classes: constructor functions ///

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('mike', 2020, 'IT');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//challenge


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('TESLA', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// inheritance btw classes: ES6 classes ///

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  //instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`${this.firstName} iLoveYou`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static methods
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`my name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but i already feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('martha jonas', 2012, 'computer science');
martha.introduce();
martha.calcAge();

// inheritance btw classes: object.create ///

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const studentProto = Object.create(PersonProto);
studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(studentProto);
jay.init('jay', 2010, 'computer science');
jay.introduce();

// another class example

// encapsulation: private class field and methods
// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods

class Account {
  // 1) public fields (instances)
  locale = navigator.language;

  // 2) private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // public interface
  // 3) public methods

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`loan has been approved`);
      return this;
    }
  }

  // 4) private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('jonas', 'EUR', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-150);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);

//chaining
acc1.deposit(300).deposit(500).withdraw(150).requestLoan(25000).withdraw(10000);
console.log(acc1.getMovements());
*/

// challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.5;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCL extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 188, 33);
console.log(rivian);
// console.log(rivian.#charge);

rivian.accelerate().accelerate().brake().accelerate().chargeBattery();

console.log(rivian.speedUS);
