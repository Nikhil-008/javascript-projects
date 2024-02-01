'use strict';

/*
//functions  this section is function declaration
function logger () {
    console.log('my name is nikhil');
}

// calling/ running / invoking functions : these are just like machines can receive and give data

logger ();
logger ();
logger ();

function fruitProcessor (apples, oranges) {
    const juice = `need juice with ${apples} apples and with ${oranges} oranges`;
    return juice;
}  // here this is function

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeAppleJuice = fruitProcessor(8,7); // here these are arguments 8 7
console.log(orangeAppleJuice)



// functions declarations vs expressions

//declarations

function calcAge1(birthYear){
    return 2023 - birthYear;
}

const age1 = calcAge1(1999);

//expressions

const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1987);

console.log (age1, age2)


//arrow functions

//for single line variable, its straight forward
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3); 

//for two or more variables

const yearsTillRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return ` ${firstName} retires in ${retirement} years`;
}
console.log(yearsTillRetirement (1998, 'nikhil'));
console.log(yearsTillRetirement (1988, 'chinni'));


//functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces =  cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples, and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log (fruitProcessor(2,3));


//reviewing functions

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsTillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years`);
        return retirement;
    } else { 
        console.log(`${firstName} already retired..`);
        return -1;
    }

}
console.log(yearsTillRetirement(1998, "Nikhil"));
console.log(yearsTillRetirement(1949, "chinni"));


// challenge 

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (a, b, c) => (a + b + c) / 3;

//test data 1

let scoreDolphins = calcAverage (44, 23, 71);
let scoreKoalas = calcAverage (65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`kolas win`);
    } else {
        console.log(`no team wins`);
    }

}
checkWinner (scoreDolphins, scoreKoalas);

//test data 2

scoreDolphins = calcAverage (85, 54, 41);
scoreKoalas = calcAverage (23, 34, 27);
console.log(scoreDolphins, scoreKoalas);


checkWinner (scoreDolphins, scoreKoalas);



//arrays

const friend1 = 'nikhil';
const friend2 = 'chinni';
const friend3 = 'chinna';

const friends = ['nikhil', 'chinni', 'chinna'];
console.log(friends);

const year = new Array(1191, 2003, 1998);
console.log(year);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 2]);

friends[2] = 'gattadi'
console.log(friends); //we can change one but not all the names


const firstName = 'gattadi';
const nikhil = [firstName, 'nikhil', 2023 - 1999, 'developer', friends];
console.log(nikhil)

//exercise

const calcAge = function (birthYear){
    return 2023 - birthYear;
}
const years = [2000, 1998, 1988, 1978];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[year.length - 1]);
console.log (age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// basic array operations
const friends = ['nikhil', 'chinni', 'chinna'];
//adds
friends.push('mammmi');  //push is a function == adding element
console.log(friends);
friends.unshift('gattadi');
console.log(friends);

//removes

friends.pop(); //last
// console.log(friends)

const popped = friends.pop(); 
console.log(friends)

friends.shift();
console.log(friends) //removes first

console.log (friends.indexOf('chinni')); //shows the position
console.log (friends.indexOf('rahul'));

console.log (friends.includes('chinni')); //shows the true or false
console.log (friends.includes('rahul'));

if (friends.includes('chinni')) {
    console.log(`i have a nick name called chinni`)
} //its shows bcoz its true and its included in the friends list





const calcTip = function (bill){
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total)


//objects structure

const nikhil = {
    firstName: 'gattadi',
    lastName: 'nikhil',
    age: 2023-1998,
    job: 'devoloper',
    friends: ['chinni', 'mammi', 'chinnu']
};

console.log(nikhil);

console.log(nikhil.firstName);
console.log(nikhil['lastName']);

const namekey = 'Name';
console.log(nikhil['first' + namekey]);
console.log(nikhil['last' + namekey]);

const intrestedIn = prompt(` what do you want to know abour nikhil? choose between firstName, lastName, age, job and friends`);

if (nikhil[intrestedIn]) {
    console.log(nikhil[intrestedIn]);
} else {
    console.log (`wrong request! choose from, lastName, age, job and friends`)
}

nikhil.location = 'india';
nikhil['instagram'] = '@nikkhhil'
console.log(nikhil);

console.log(`${nikhil.firstName} has ${nikhil.friends.length} friends, and his best friend is ${nikhil.friends[0]}`);




//object methods

const nikhil = {
    firstName: 'gattadi',
    lastName: 'nikhil',
    birthYear: 1998,
    job: 'devoloper',
    friends: ['chinni', 'mammi', 'chinnu'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function() {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};

console.log(nikhil.calcAge());
console.log(nikhil.age);
console.log(nikhil.getSummary());



//challenge

const mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
    }

}

const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
    }

}
mark.calcBMI();
john.calcBMI();
// console.log(mark.bmi, john.bmi)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


//loops
//for loop keeps running while condition is TRUE

for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`lifting weights repitation ${rep} `)
}


// looping arrays, breaking & continuing

const nikhil = [
    'gattadi',
    'nikhil',
    2023-1998,
    'devoloper',
    ['chinni', 'mammi', 'chinnu']
];

const types = []; //empty array

for(let i = 0; i < nikhil.length; i++){ //i < nikhil.length = we are not giving any limit here, it automatically calculates 
    console.log(nikhil[i], typeof nikhil[i]);

    //filling array
    // types[i] = typeof nikhil[i];
}

console.log(types)

const years = [2000, 1998, 2003, 1991];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2023 - years[i])
}
console.log(ages);

//continue and break

console.log('only strings');
for(let i = 0; i < nikhil.length; i++){ 
    if (typeof nikhil[1] !== 'string') continue;

    console.log(nikhil[i], typeof nikhil[i]);
}

console.log('break with number');
for(let i = 0; i < nikhil.length; i++){ 
    if (typeof nikhil[1] == 'number') break;
    
    console.log(nikhil[i], typeof nikhil[i]);
}


// looping backwards and looping in loops

const nikhil = [
    'gattadi',
    'nikhil',
    2023-1998,
    'devoloper',
    ['chinni', 'mammi', 'chinnu'],
    true
];

// 0,1,2,3.....4
// 4,3,2,......0

for(let i = nikhil.length - 1; i >= 0; i--) {
    console.log(i, nikhil[i])
}

for(let exercise = 1; exercise < 4; exercise++){

    console.log(`------- starting the exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} lifting weight reps ${rep}`)
    }
}


//while loop

for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`lifting weights repitation ${rep} `)
} //for loop

let rep = 1;
while(rep <= 10) {
    console.log(`while: lifting weights repitation ${rep} `);
    rep++;
} //while loop 

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


for (let i = 0; i < bills.length; i++ ){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip + bills[i]);
}
console.log(bills, tips, total)