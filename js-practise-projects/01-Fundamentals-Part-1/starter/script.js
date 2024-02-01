/*let js = 'amazing';
console.log(40+8+23-10);

let firstName = 'gattadi'
console.log(firstName);

// assignment 1 

let country = 'india';
let continent = 'asia';
let population = 120000000;

console.log(country);
console.log(continent);
console.log(population);
//end


// data types string,number,boolean,undefined,null (imp 5)
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof 'javascriptIsFun');
console.log(typeof 23);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

console.log(typeof null)


// basic operators


console.log(ageNikhil, ageChinni, 2**3);
// 2**3 means 2 tot the power of 3 equals 2*2*2

const firstName = 'gattadi';
const lastName = 'nikhil';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x+10 = 25
x *= 4; // x = 25 x 4 = 100
x ++; // 100 + 1
x --; //101-1 = 100
console.log(x);

//comparison operators
console.log (ageChinni > ageNikhil); // >,<, <=, >=
console.log( ageChinni >= 27);

const isFullAge = ageNikhil >= 18;


const now = 2023;
const ageNikhil = now - 1998;
const ageChinni = now - 1997;

//operator procedense
console.log (now - 1998 > now - 1997); //how js know which calculation to do first 

let x, y;
x = y = 25 - 10 - 5; //x=y=10
console.log(x,y);

const avgAge = (ageChinni + ageNikhil) / 2 ;
console.log (ageChinni, ageNikhil, avgAge);

//assignment 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log (BMIJohn, BMImark);
const markHigherBMI = (BMImark > BMIJohn);
console.log (markHigherBMI);
//end

//template literals using placeholders
const name = 'nikhil';
const job = "devoloper";
const birthYear = 1998;
const year = 2023;

const nik = `i'am ${name}, ${year - birthYear} years old working as an ${job}`;
console.log(nik)


// if else statements
const age = 15;

if (age >= 18) {
    console.log(`i can get driving license`);
} else{ 
    const yearsLeft = 18 - age;
    console.log (`i cannot get driving license i still need to wait ${yearsLeft} years`);
}

//assignment 3
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



if (BMIJohn > BMIMark) {
    console.log(`john's bmi ${BMIJohn} is higher than mark's${BMIMark} bmi.`);
} else {
    console.log(`mark's bmi ${BMIMark} is higher than john's${BMIJohn} bmi.`);
}
//end


//type conversions
const inputYear = '1991';
console.log (Number(inputYear), inputYear);
console.log (Number(inputYear) + 18);

console.log(Number('nikhil'));
console.log (typeof NaN);
console.log(String(23), 23);

//type coercion
console.log('i am ' + 23 + ' years old');
//results will vary here js nows what to do and does it automatically
console.log('23' - '13' - 3);
console.log('23' + '13' + 3);

let n = '1' + 1; // string and number so 11
n = n - 1; // has substraction so 11-1 = 10
console.log(n)


// five falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('nikhil'));
console.log(Boolean({}));  //empty object so true
console.log(Boolean(''));  //empty string so false

const money = 0 ; // its zero so its false so it gives else statement
if (money) {
    console.log ("dont spend it!!");
} else{
    console.log("you dont have money");
}


// equality operators

const age = 18;
if (age === 18) console.log ('you are adult :strict quality operator');
if (age == 18) console.log ('you are adult : loose q op');

const favourite =Number( prompt("whats is your favourite number"));
console.log(favourite)
//prompt is an function here

if (favourite === 23) {
    console.log('23 is an amazing number');
} else if (favourite === 8) {
    console.log('8 is also an cool number');
} else {
    console.log('numbers are not 8 and 23')
}
if (favourite !== 23) {
    console.log('why not 23'); // different operator strict one
}


//boolean logic AND , OR, NOT operators
// logical operators

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log (hasDriverLicense && hasGoodVision); // AND operator
console.log (hasDriverLicense || hasGoodVision); // OR operator
console.log (!hasDriverLicense); // NOT operator

console.log(hasDriverLicense && hasGoodVision && isTired); 
if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('i can drive'); 
} else {
    console.log('someone should drive...')
}




// challenge 
const scoreDolphins = (96 + 108 + 89) / 3 ;
const scoreKoalas = (88 + 91 + 110) / 3 ;
console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}

//switch statements
// diff btw switch and else if
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('have work 9 to 6');
        break;
    case 'tuesday': 
        console.log('learn coding');
        break;
    case 'wednesday': 
        console.log('have to attend meetings');
        break;
    case 'thrusday':
    case 'friday':
        console.log('attend standup calls');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy weekend');
        break;
    default:
        console.log('enter correct day');
}

if (day === 'monday'){
    console.log('have work 9 to 6');

} else if (day === 'tuesday'){
    console.log('learn coding');

} else if (day === 'wednesday') {
    console.log('have to attend meetings');

} else if ( day === 'thrusday' || day === 'friday'){
    console.log('attend standup calls');

} else if ( day === 'saturday' || day === 'sunday'){
    console.log('enjoy weekend');

} else {
    console.log('enter correct day');
    
}

// statements and 


// conditional or ternary operator
// diff btw ternary and if else operators

const age = 18;

const drink = age >= 18 ? 'wine' : "water";
console.log(drink)


let drink2; 
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2)
//we can use the statement in template literal

console.log(` i can to drink ${age >= 18 ? 'wine' : "water"}`)
*/


// challenge using ternary

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

