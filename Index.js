"use Strict";
/*let str = "beena";
if (str === "beena") {
  alert("she is good"); //renders on the browser
}*/
// console.log("she is good") renders on the console

// learnt about data types

let personName = "Beena";
console.log(typeof personName);

let Beena = true;
console.log(Beena);
console.log(typeof Beena);

// learnt let const var
//  basic operators
// challeng: (haven't copied fyi)
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = true;
if (BMIMark > BMIJohn) {
  console.log(markHigherBMI);
} else {
  console.log(false);
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's! ${BMIJohn}`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's! ${BMIMark}`);
}

//  template literal

console.log(
  "Beena \n\
loves \n\
to code"
);

/*console.log("Beena
loves 
to code")  
we do get an error*/

console.log(`Beena
loves 
to code`);

const num = "123";

console.log(Number(num) + 2);
// convert a string to number

const number = 123;
console.log(String(number) + 2);
// convert a number to a string

// if, else & operators
/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
}
if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
}
if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}
*/

//  ternary operator

const age = 10;
const result =
  age >= 18 ? "The person is an adult" : "The person is not an adult";
console.log(result);

const person = "male";
const gender = person === "male" ? "male" : "female";
console.log(`I'm a ${gender}`);

// challenge
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const value = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${value} `
);

// functions
const userName = () => console.log("Beena");

userName();
// a function without the parameters returns the function
const juiceProcessor = (apples, beetroots) => {
  console.log(apples, beetroots);
  const juice = `Made of ${apples} apples and ${beetroots} beetroots. `;
  return juice;
};
const fruitJuice = juiceProcessor(2, 3); //prints 2 , 3
console.log(fruitJuice);
juiceProcessor(3, 0); // prints 3 , 0

const appleJuice = juiceProcessor(3, 0);
console.log(appleJuice);
//  calling a function with the parameters generally returns the arguments only
// using a console.log() will print the function or result

// arrow function

const BeenaAge = (birthyear) => 2023 - birthyear;
const requiredAge = BeenaAge(1999);
console.log(requiredAge);

// challenge

const calcAverage = (x, y, z) => {
  const averageScore = (x + y + z) / 3;
  return averageScore;
};
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} `);
  }
  if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins} `);
  } else {
    console.log("No team wins...");
  }
};

const result2 = checkWinner(scoreDolphins, scoreKoalas);

// array
const dates = new Array(3, 5, 11, 16, 88); // another way of writing arrays using the new keyword
console.log(dates);

const nums = [1, 2, 3, 4, 5];
nums[3] = 6;
console.log(nums);
console.log(nums[1]);

// array methods

const numPush = nums.push(6);
console.log(numPush);
console.log(nums); // pushes to the exsisting array
nums.unshift(3);
console.log(nums); //adds to the beginning of the array

nums.pop();
console.log(nums); // removes the last item in the array

nums.shift();
console.log(nums); // removes the first item opf the array

console.log(nums.indexOf(3)); // gives the index of the number
console.log(nums.indexOf(88)); // returns -1 since it's not found in the array
console.log(nums.includes(1)); // returns a booleans value. true if present else false.

/* TOPICS VOVERED SO FAR
 values, variables, let const var
 data types
 operators
 strings, template literals
 type conversion and coercion
 booleans
 == ===
 switch, ternary
 functions -declarations & expressions
 arrow functions
 arrays and array methods*/
