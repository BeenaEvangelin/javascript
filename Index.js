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
// challenge: (haven't copied fyi)
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
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `
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

/* TOPICS cOVERED SO FAR
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

//  object methos
const PersonBeena = {
  firstName: "Evangelin",
  lastName: "Gracia",
  birthYear: 1999,
  place: "chennai",
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} ${this.lastName}  is from ${this.place}`;
  },
};
console.log(PersonBeena.place);
console.log(PersonBeena.calcAge());
console.log(PersonBeena.summary());

// for loop

let i = " ";
for (i = 1; i <= 10; i++) {
  console.log(`student${i}`); // i++ => i + 1
}
// using .length will simply add to the exsisting array which will help us to avoid hard coding the values

const person2 = {
  firstName: "Fiona",
  lastName: "Collene",
  age: 10,
  place: "assam",
};

for (let j = 0; j < 2; j++) {
  console.log(person2[j]);
}

const years = [1972, 1974, 1999, 2003];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

//break and continue
const array1 = [
  "cyan",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "red",
  "blue",
  " green",
  11,
  12,
  "black",
];

for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] !== "string") continue;
  console.log(array1[i], typeof array1[i]); //got string instead
}

for (let j = 0; j < array1.length; j++) {
  if (typeof array1[j] === "number") continue;
  console.log(array1[j], typeof array1[j]); // got string again
}

for (let k = 0; k < array1.length; k++) {
  if (typeof array1[k] === "string") continue;
  console.log(array1[k], typeof array1[k]); // got numbers instead
}

for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] === "number") break;
  console.log(array1[i], typeof array1[i]); // got string again
}
for (let j = 0; j < array1.length; j++) {
  if (typeof array1[j] === "string") break;
  console.log(array1[j], typeof array1[j]); // nothing
}

for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] !== "number") continue;
  console.log(array1[i], typeof array1[i]); //got numbers instead
}

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums2.length - 1; i >= 0; i--) {
  console.log(nums2[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Lerning exercise ${exercise}`);

  for (let sum = 1; sum <= 5; sum++) {
    console.log(`Learning sum ${sum}`);
  }
}

let teacher = 1;
while (teacher <= 11) {
  console.log(`This is Teacher ${teacher}`);
  teacher++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`The number is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("Your turn ends..");
  }
}

//chalenge
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
console.log(calcTip(100));
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = `[${bills[0] + tips[0]}, ${bills[1] + tips[1]}, ${
  bills[2] + tips[2]
}]`;
console.log(totals);

// challenge
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.fullNameBMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

mark.calcBMI();
console.log(mark.BMI);

john.calcBMI();
console.log(john.BMI);

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${
      john.fullName
    }'s  ${john.calcBMI()}!`
  );
}
if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI ${john.calcBMI()} is higher than ${
      mark.fullName
    }'s  ${mark.calcBMI()}!`
  );
} else {
  console.log("none");
}
/*console.warn() find warnings
console.error() used to find the errors and warnings in the console 
console.table() for bigger objects*/

const evelyn = {
  firstName: "Evelyn",
  lastName: "Cordelia",
  birthYear: 2003,
  findAge: function () {
    const age = 2023 - this.birthYear;
    console.log(age);
    console.log(this); // points to the owner of the object
  },
};
evelyn.findAge();

const noel = {
  birthYear: 2021,
};

noel.findAge = evelyn.findAge;
noel.findAge(); //METHOD BORROWING

//ARGUMENTS

const addNums = function (x, y) {
  return x + y;
};
console.log(addNums(2, 3)); // a normal function gives 5 as the output

const addNum = function (a, b) {
  console.log(arguments);
  return a + b;
};
addNum(2, 2); // gives an array with the parameters

// PRIMITIVE TYPES

let colour = "black";
let newColour = colour;
colour = "blue";

console.log(colour, newColour);

let fruit = "apple";
let newFruit = fruit;
fruit = "banana";
console.log(fruit, newFruit);

const personA = {
  firstName: "Sheela",
  lastName: "Paul",
};

const personB = personA;
personB.firstName = "Reena";

console.log(personA, personB);
// It doesn't create a new object in the heap but
//just a new variable in the stack that holds to the
//reference of the original object

const personC = {
  firstName: "Beena",
  lastName: "Paul",
};

const personD = Object.assign({}, personC);
personD.firstName = "Reena";

console.log(personC, personD);
