"use Strict";

/*let str = "beena";
if (str === "beena") {
  alert("she is good"); // alert renders on the browser
}*/
// console.log("she is good") console.log renders on the console

// learnt about data types

let personName = "Beena";
console.log(typeof personName);

let Beena = true;
console.log(Beena);
console.log(typeof Beena); // it gives the type like string, object, boolean, number, array etc

// learnt let const var
//  basic operators
// challenge:
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
will give an error*/

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
nums[3] = 6; // here 3 is the index so the num 4 in 4th position is changed to 6
console.log(nums);
console.log(nums[1]);

// array methods

const numPush = nums.push(6);
console.log(numPush); // gives the number which we were pushing
console.log(nums); // pushes to the exsisting array
nums.unshift(3);
console.log(nums); //adds to the beginning of the array

nums.pop();
console.log(nums); // removes the last item in the array

nums.shift();
console.log(nums); // removes the first item of the array

console.log(nums.indexOf(3)); // gives the index of the number
console.log(nums.indexOf(88)); // returns -1 since it's not found in the array
console.log(nums.includes(1)); // returns a booleans value. true if present else false.

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

// to print numbers in the reverse order

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums2.length - 1; i >= 0; i--) {
  console.log(nums2[i]);
}

// loop in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Lerning exercise ${exercise}`);

  for (let sum = 1; sum <= 5; sum++) {
    console.log(`Learning sum ${sum}`);
  }
}

// while loop

let teacher = 1;
while (teacher <= 11) {
  console.log(`This is Teacher ${teacher}`);
  teacher++;
}

let dice = Math.trunc(Math.random() * 6) + 1; //Math.random() gives a number randomly; Math.tunc() gives a whole value

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
//  a function or method can be implemented in an object and the property can be assessed using the this keyword

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
    console.log(age); //points to the age
    console.log(this); // points to the owner of the object
  },
};
evelyn.findAge();

const noel = {
  birthYear: 2021,
};

noel.findAge = evelyn.findAge;
noel.findAge(); //METHOD BORROWING : a function or method used in one object can be borrowed to the other object

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
personB.firstName = "Leena";

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

console.log(personC, personD); // this creates a new object

// Array destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
// Array destructuring is breaking the array into separate variables
// the original array isn't distroyed. We are just unpacking the array
console.log(arr);

// switching variables

const favourites = {
  favColor: ["blue", "black", "white"],
  favFood: ["biryani", "pasta", "pizza"],
  favFruit: ["mango", "apple", "papaya"],
  select: function (favFood, favFruit, favColor) {
    return [
      this.favFood[favFood],
      this.favFruit[favFruit],
      this.favColor[favColor],
    ];
  },
};

let [primary, , tertiary] = favourites.favColor;
console.log(primary, tertiary);
[primary, tertiary] = [tertiary, primary];
console.log(primary, tertiary);

const [selectedFood, selectedFruit, selectedColor] = favourites.select(2, 2, 2);
console.log(selectedFood, selectedFruit, selectedColor); // it gives the items in the second index

// destructuring objects

const { favFood, favColor } = favourites;
console.log(favFood, favColor);

// Mutating objects
let a1 = 10;
let b1 = 7;
const obj = { a1: 22, b1: 23, c1: 76 };

({ a1, b1 } = obj);
console.log(a1, b1);

// spread operator
const givenArr = [3, 4, 5];
const newArr = [1, 2, ...givenArr, 6];
console.log(newArr);
console.log(...newArr); // spread operator gives the individual elements of an array (unpacking the elements of an array)

const newFavFood = [...favourites.favFood, "Burger"];
console.log(newFavFood);

// shallow copy of an array
const names = ["beena", "anand"];
const newNames = [...names];
console.log(newNames);

// join 2 arr using spread operator
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// rest operator is on the left side
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others); //packs the elements of an array

//challenge
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmud",
  players: [
    [
      "Never",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnaby", "Lewandowski", "Hummels"],
  date: "nov 9 th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);
const [goalkeeper, ...fieldplayers] = players1;
console.log(goalkeeper, fieldplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...players1, "Thiago", "Coutinho", "Peristic"];
console.log(playersFinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`); //just players will print the players and not the num scored
};
printGoals("Davis", "Muller", "Lewandowski", "Kimich");
printGoals("Davis", "Muller");
printGoals(...game.scored);

team1 < team2 && console.log("team1 wins!!");

// optional chaining

console.log(game.odds?.team1); //if odds exsist it'll return the expected result i.e team1 else it'll return undefined
// this is useful in avoiding a lotta errors

// Reverse an array problem
let input = [1, 2, 3, 4, 5];
input.reverse();
console.log(input);

const reverse = function (array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

console.log(reverse([1, 2, 3, 4, 5]));

//  star pattern problem
let n = 4;
let str = "";

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }

  str += "\n";
}
console.log(str);

// SET

const letters = new Set([
  "A",
  "B",
  "B",
  "N",
  "M",
  "K",
  "L",
  "U",
  "J",
  "A",
  "S",
  "D",
  "M",
  "K",
  "L",
]);
console.log(letters); //takes away all the duplicates

console.log(letters.size); // size after removing the duplicates
console.log(letters.has("L")); // true if present and false if absent
console.log(letters.has("Z")); // similar to includes method
letters.add("W");
letters.delete("D");
console.log(letters); // adds and deletes the required character
// letters.clear()    clears all items of the set

for (const letter of letters) {
  console.log(letter); // get the individual elements of the set
}

const letters2 = ["a", "b", "a", "c", "b"];
const uniqueLetters2 = [...new Set(letters2)];
console.log(uniqueLetters2);

console.log(new Set("beena").size);

const bioData = new Map();
bioData.set("firstName", "Beena");
bioData.set("age", 23);
bioData.set("status", "single");
console.log(bioData.set("gender", "female"));
console.log(bioData.get("age"));
console.log(bioData.has("age"));
console.log(bioData.size);
bioData.delete("status");
//console.log(bioData.clear)
console.log(bioData);

// problems
// Reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("welcome"));

function reversestr(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string.push(str[i]);
  }
  return string;
}

console.log(reverseString("Paul"));

// Reverse a string using spread operator

const userName1 = "Anand";
const revName = [...userName1].reverse().join("");
console.log(revName);

// Remove white spacs in a string

const colors = "      blue    &    black   ";
console.log(colors.trim()); // removes spaces at the start and end
console.log(colors.trimStart()); // removes spaces at the start
console.log(colors.trimEnd()); // removes spaces at the end

const phrase = "this is    a      girl";
console.log(phrase.replace(" ", "")); // replaces only the first character that matches the condition
console.log(phrase.replaceAll(" ", "")); // replaces all the characters that matches the condition

const question = "Where is france?";
const remSpaces = question.replace(/\s+/g, ""); //also /\s/g, ""
console.log(remSpaces);

const myGender = " I am female";
console.log(myGender.replace(/ /g, ""));

// PROBLEM REMOVE DUPLICATE CHARACTERS OF A STRING

const duplicateStr1 = function (str) {
  let duplicates = [...new Set(str)];
  return duplicates;
};
console.log(duplicateStr1("this is a sunny day"));

// PRINT DUPLICATE  CHARACTERS OF A STRING
const myStrng = "beena evangelin";
const setStrng = new Set(myStrng);
const duplicateStrng = myStrng.split("").filter((letter) => {
  if (setStrng.has(letter)) {
    setStrng.delete(letter);
  } else {
    return letter;
  }
});
console.log(duplicateStrng);

// PROBLEM EQUALITY OF TWO ARRAYS

const numArray1 = [1, 2, 3, 4, 5, 7, 8, 9, 4, 5, 6, 9];
const numArray2 = [1, 2, 3, 4, 5, 7, 8, 9, 4, 5, 6, 9];
numArray1 == numArray2 ? console.log("true") : console.log("false");

const equalityArr = function () {
  const letterArray1 = ["a", "d", "v", "r", "k"];
  const letterArray2 = ["a", "d", "p", "r", "k"];

  if (letterArray1.toString() === letterArray2.toString()) {
    return console.log("both are equal");
  } else {
    return console.log("they are not equal");
  }
};

equalityArr();

// ANAGRAM PROBLEM
// anagram : a word can be scrambled to form another word
const anagramPrblm = function (str1, str2) {
  const anagram = function (str) {
    return str.toLowerCase().split("").sort().join();
  };

  return anagram(str1) === anagram(str2);
};

console.log(anagramPrblm("care", "race"));
console.log(anagramPrblm("Mother In Law", "Hitler Woman")); // gives false as it counts the space between them as well
console.log(anagramPrblm("car", "far"));

// this problem can also be solved using if statements

// armstrong number in javascript
// A number is called an Armstrong number if it is equal to sum of its digits each raised to the power of number of digits in it.
// For example: 153, 9474, 54748 are some Armstrong numbers.

const armstrongNumber = function (n) {
  let number = new String(n);

  n = number.length;
  let output = 0;

  for (let i of number) {
    output = output + parseInt(i) ** n;
  }

  if (output == parseInt(number)) {
    return "yes, it is an armstrong number";
  } else {
    return "no, it is not an armstrong number";
  }
};

console.log(armstrongNumber(1634)); //n = 4
console.log(armstrongNumber(153)); // n= 3
// print duplicates from an array

const numbers = [1, 2, 3, 5, 4, 5, 6, 5, 6, 5, 6];
const set = new Set(numbers);

const duplicates = numbers.filter((item) => {
  if (set.has(item)) {
    set.delete(item);
  } else {
    return item;
  }
});
console.log(duplicates);

// STRING METHODS
const airline = "Air India";
console.log(airline[4]);
console.log(airline.length);
console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.charAt(8));
console.log(airline.slice(4)); //this is a substring
console.log(airline.slice(4, 6)); // the end value is not included in the string
//  length of a substring is the difference between the beginning and the end parameters
console.log(airline.slice(airline.indexOf("A"), airline.lastIndexOf(" ")));
console.log(airline.slice(airline.indexOf("A"), airline.indexOf(-1)));
console.log(airline.slice(4, 6 + 1)); // this includes the end value in the slice method
console.log(airline.slice(4, -2)); // - gives the last index
console.log(new String("Beena")); // it gives an object
console.log(typeof new String("Beena")); //object
console.log(new String("Beena").slice(2));
console.log(typeof new String("Beena").slice(2));
const string = "this is a beautiful place in chennai";
console.log(string.replace(/chennai/g, "bangalore"));
console.log(airline.includes("i")); // gives a boolean value
console.log(airline.startsWith("ir")); // boolean value
console.log(airline.endsWith("a")); // boolean value

const capitalizeNames = function (names) {
  let userName = names.split(" ");
  let capitalNames = [];
  for (const n of userName) {
    capitalNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return capitalNames.join(", ");
};
console.log(capitalizeNames("veena priya sarah"));

// padding
const playerName = "dhoni";
const resultantName = playerName.padStart(10, "*").padEnd(20, "*");
console.log(resultantName);

const creditCardNumber = function (number) {
  let str = number + ""; // converts a number to a string
  console.log(typeof str);
  let cardNum = str.slice(-4);
  return cardNum.padStart(11, "*");
};

console.log(creditCardNumber(345790897262));

const noOfStars = function (num) {
  return `There are ${num} number of stars ${"*".repeat(num)} in the sky}`;
};

console.log(noOfStars(5));
console.log(noOfStars(8));
console.log(noOfStars(3));
console.log(noOfStars(12));
console.log(noOfStars(16));

const ticketBooking = function (flightNo, tickets = 1, amount = 250 * tickets) {
  const confirmBooking = [];
  const booking = {
    flightNo,
    tickets,
    amount,
  };
  console.log(booking);
  confirmBooking.push(booking);
};

ticketBooking("AI112", 2);

// functions accepting functions (callback functions)

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const UpperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(" ");
  return [firstWord.toUpperCase(), ...others].join(" ");
};

const requiredPhrase = function (str, fn) {
  console.log(`Original phrase : ${str}`);
  console.log(`Required phrase : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

requiredPhrase("Javascript is fun", oneWord);
requiredPhrase("Javascript is fun", UpperFirstWord);

const greet = function () {
  console.log("hi");
};

//document.body.addEventListener("click", greet);
["beena", "benitta", "evelyn"].forEach(greet);

// function returning functions (opp of callback)

const greeting = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greetHi = greeting("hi");
greetHi("beena"); //or

greeting("hi")("beena");

// returning a arrow function
const greetPerson = (greet) => (name) => console.log(`${greet} ${name}`);
greetPerson("hello")("brother");

// PROBLEMS  SUM OF ALL DIGITS OF A GIVEN NUMBER

let gnNum = 1234;

let sum1 = 0;
while (gnNum) {
  sum1 += gnNum % 10; // reminder is 4 then 3 then 2 and then last digit is < 10
  gnNum = Math.floor(gnNum / 10); // 4+3+2 = 9/ 10  = 0.9 , floor value is 1 so 9 +1 = 10
}

console.log(sum1);

const addNumber = function (num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
};
addNumber(12345);

const addTheDigits = (num) => {
  const numArr = num.toString().split("");
  let sum = numArr.reduce((a, b) => Number(a) + Number(b));

  return sum;
};

console.log(addTheDigits(123455));

// bind method
// borrows a functions and creates a copy
// this keyword replaced with the object passed in as an argument

let person1 = {
  name: "sheeja",
};

let person3 = {
  name: "preetha",
};

let person4 = {
  name: "sheela",
};
const actions = function (action) {
  console.log(this.name, "is", action);
};

dance = actions.bind(person1, "dancing");
sing = actions.bind(person3, "singing");
write = actions.bind(person4, "writing");

dance();
sing();
write();

//  IIFE immediately invoked functional expression

(function () {
  console.log("just a function");
})();

// ARRAY METHODS

const favLetters = ["a", "l", "u", "o", "d", "t", "j", "c"];
console.log(favLetters.slice(2, 5)); // end parameter is not included
console.log(favLetters.slice(-2)); // slice method doesn't mutate the original array
console.log(favLetters.slice()); // gives a shallow copy of the original method

console.log(favLetters.splice(2, 5)); // splice method mutates the original array
console.log(favLetters); // the original array after mutation

const favLetters1 = ["a", "l", "u", "o", "d", "t", "j", "c", "v"];
console.log(favLetters1.reverse()); // mutates the array
const favNums = [3, 5, 9, 8, 1, 3];
const resultArr = favLetters1.concat(favNums);
console.log(resultArr);
console.log(favNums.join(""));

//  NEW AT METHOD

const array2 = ["A", "B", "U", "H"];
console.log(array2[3]);
console.log(array2.at(3));

//TO GET THE LAST ELEMENT OF AN ARRAY
console.log(array2[array2.length - 1]);
console.log(array2.slice(-1)); // gives the output in the form of an array
console.log(array2.slice(-1)[0]); // removes the []
console.log(array2.at(-1)); // at method removes the square brackets automatically
const subject = "english";
console.log(subject.at(2));

const numberArr1 = [1, 2, 3, 6, 7, 9, 3, 4, -2, -5, -9, 8, -1];
// forEach & forOF
console.log("**************forEach******************");

numberArr1.forEach(function (num, i, arr) {
  // for forEach we give the current element, index and the entire array as the parameters as it passes all the three in the loop
  if (num > 5) {
    console.log(`No: ${i + 1} => the num ${num} is greater than 5 `);
  } else {
    console.log(`No: ${i + 1} => the number ${Math.abs(num)} is less than 5`);
  }
});
//  SORTING AN ARRAY
// ascending order
console.log(
  numberArr1.sort((num1, num2) => {
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  })
);

// descending order
console.log(
  numberArr1.sort((num1, num2) => {
    if (num1 > num2) return -1;
    if (num1 < num2) return 1;
  })
);

console.log("**************forOf******************");
for (const [i, num] of numberArr1.entries()) {
  //for forOf we give the index and the element as the parameters
  if (num > 5) {
    console.log(`No: ${i + 1} =>  the num ${num} is greater than 5 `);
  } else {
    console.log(`No: ${i + 1} =>  the number ${Math.abs(num)} is less than 5`);
  }
}

// MAP METHOD TO LOOP OVER ARRAYS

ruppeeAmt = [35, 66, 78, 98, 32, 12, 50, 16];
ruppeetoDollar = 0.012;

const ruppeeToDollarConvertor = ruppeeAmt.map(function (ruppeeAmt) {
  return ruppeeAmt * ruppeetoDollar;
});

console.log(ruppeeToDollarConvertor);

const ruppeeToDollarConvertor1 = ruppeeAmt.map(
  (ruppeeAmt) => ruppeeAmt * ruppeetoDollar
);

console.log(ruppeeToDollarConvertor1);

const selectedNums = [1, 3, 2, 8, 66, 45, 29, 21, 52, 9, 4, 11, 65, 99, 1, 40];

const requiredNum = selectedNums.find((num) => num > 10);
console.log(requiredNum); // find method returns the first element that matches the condition

//  FindIndex method gives the index of the found element
const requiredIndex = selectedNums.findIndex((num) => num > 20);
console.log(requiredIndex);

console.log(selectedNums.includes(9));

console.log(selectedNums.some((num) => num < 50)); // gives a boolean value based upon a condition. return true even if one element satisfies the condition
console.log(selectedNums.every((num) => num < 0)); // returns true only if every element satisfies the condition

// flat method
// they are used to flatten the array in arrays
const Numbers = [
  1,
  6,
  33,
  75,
  94,
  [235, 345, [45, 89, 23], 56, 222],
  89,
  235,
  [678, 22, [16, 2, 7], 33],
  78,
];

console.log(Numbers.flat()); // it just goes one step deep
// to flattern 3d or 4d arrays and so on then we should specify it
console.log(Numbers.flat(2));

// flatmap combines the flat and map method together
// FILL METHOD
const fillArr = [1, 4, 2, 4, 6, 8, 1, 7, 9];
console.log(fillArr.fill(1));
const arrfill = fillArr.fill(0, 2, 4);
console.log(arrfill);
// FROM METHOD
const x1 = new Array(5);
console.log(x1);
const y1 = Array.from({ length: 4 }, () => 6);
console.log(y1);
const z1 = Array.from({ length: 5 }, (crr, i) => i + 1);
console.log(z1);

// PROBLEM : TO GENERATE 100 DICE ROLLS

const diceRolls = function (array) {
  console.log(Array.from({ length: 100 }, (curr, i) => i + 1));
};

diceRolls();

// NUMBERS, DATES, INTEGERS, TIMERS

// convert a string to a number
console.log(Number("10"));
console.log(+"12");
console.log(16);
console.log(Number.parseInt("11rem")); // parseInt is applicable only if the string begins with a number
console.log(Number.parseInt("no:10"));
console.log(Number.parseFloat("10.01"));
console.log(Number.parseFloat("no:10.0008")); // applicable if the string begins with a number
console.log(Number.parseInt("23.999")); // parseInt doesn't give the decimal value

// check whether a number is a number
console.log(Number.isFinite("70"));
console.log(Number.isFinite(23));
console.log(Number.isFinite(33 / 0)); //infinite value is not finite

// check whether it is a value is a integer
console.log(Number.isInteger("70"));
console.log(Number.isInteger(23));
console.log(Number.isInteger(33 / 0));

// Rounding
console.log(Math.sqrt(25));
console.log(36 ** (1 / 2)); //sqrt
console.log(27 ** (1 / 3)); //cube rt

// max and min

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, "5"));
console.log(Math.max(1, 2, 3, 4, "5px"));
console.log(Math.min(1, 2, 3, 4, 5));

// calc radius of  a circle

console.log(Math.PI * Number.parseFloat("10px") ** 2);

// generate a random value
console.log(Math.trunc(Math.random() * 10 + 1));

const randomNum = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomNum(1, 100));

// rounding numbers
console.log(Math.round(5.2));
console.log(Math.round(5.8));

console.log(Math.ceil(5.2));
console.log(Math.ceil(5.8));

console.log(Math.floor(5.2));
console.log(Math.floor(5.8));

console.log(Math.trunc(-5.2));
console.log(Math.floor(-5.8)); // floor is better than trunc as it is more stable in rounding the negative integers

// rounding decimals
console.log((5.5).toFixed(0));
console.log((5.5).toFixed(3));
console.log((5.5987).toFixed(2));
// to fixed generally gives a string so you can convert using
console.log(+(5.519).toFixed(2));

// bigint: large integers which are difficult to calculate

console.log(21398924024989279289802810821n); // without a 'n' it gives a decimal value
console.log(BigInt(89876651));
// sqrt does not work in bigint

// date
const now = new Date();
console.log(now); //numeric value gives in numeric whereas long gives the whole in string format

const future = new Date(2023, 1, 20, 14, 22, 40);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); //gives the day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());

const calcDatePassed = (date1, date2) => {
  const resultDate = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  return resultDate;
};
const reqDate = calcDatePassed(new Date(2023, 2, 1), new Date(2023, 3, 1));
console.log(reqDate);

// SET TIMEOUT & SET INTERVAL
setTimeout(() => console.log("Have a great day!"), 3000);

/*setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);*/

// PROBLEM : FIND SECOND LARGEST NUMBER IN AN INTEGER ARRAY
// below method is not possible for numbers > 9
const intArray = [1, 5, 3, 8, 9, 6, 7, 2, 4];
const sortedArr = intArray.sort();
console.log(sortedArr);
const secondLargestInt = sortedArr.slice(-2, -1);
console.log(secondLargestInt);

// below method is available for larger integers
const intArray2 = [19, 20, 2, 3, 5, 6, 1];
const secondLargestInteger = intArray2.sort((num1, num2) => {
  if (num1 > num2) {
    return 1;
  }
  if (num2 > num1) {
    return -1;
  }
});

console.log(secondLargestInteger);
const resultantInt = secondLargestInteger.slice(-2, -1);
console.log(resultantInt);

// HOW TO PERFORM MATRIX OPERATION IN JAVASCRIPT

const matArr = [1, 3, 4, 7];
const addMatArr = function () {
  let sumArr = 0;
  matArr.forEach((el) => {
    sumArr += el;
  });

  console.log(sumArr);
};
addMatArr();

const twoDimArr = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

const add2DArr = function () {
  let result = 0;
  for (let i = 0; i < twoDimArr.length; i++) {
    twoDimArr[i].forEach((el) => {
      result += el;
    });
  }
  console.log(result);
};
add2DArr();

const threeDimArr = [
  [
    [1, 1, 1],
    [2, 2, 2],
  ],
  [
    [3, 3, 3],
    [4, 4, 4],
  ],
  [
    [5, 5, 5],
    [6, 6, 6],
  ],
];

const add3DArr = function () {
  let result = 0;
  for (i = 0; i < threeDimArr.length; i++) {
    threeDimArr[i].forEach((el) => {
      for (j = 0; j < threeDimArr.length; j++) {
        result += el[j];
      }
    });
  }
  console.log(result);
};

add3DArr();

// OBJECT ORIENTED PROGRAMMING

// constructor function => difference from the regular function is that it has a new keyword
const enteredPerson = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
const anand = new enteredPerson("anand", "ravi", 23);
console.log(anand);
console.log(anand instanceof enteredPerson);

// methods of a constructor:
/*1. new {} is created
2. function is called, this object is created; this = {} ; this keyword is set
3. {} link to a prototype
4. function automatically return {}*/

// prototypes
console.log(enteredPerson.prototype); // it gives the prototype object
enteredPerson.prototype.personBirthyear = function () {
  console.log(2023 - this.age);
};
anand.personBirthyear();

//  We can also link properties to prototypes

enteredPerson.city = "Chennai";
console.log(anand);
console.log(anand.hasOwnProperty("age"));
console.log(anand.hasOwnProperty("city")); // false as it is not directly linked into the object but in the form of a constructor

// ES-6 class
class personCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}
const preetha = new personCl("preetha", 2000);
console.log(preetha);
preetha.calcAge();

// GETTERS AND SETTERS
const personAccount = {
  owner: "Beena",
  amountEntered: [400, 500, 390, 50000, 1234560, 780, 40000],

  get amount() {
    return this.amountEntered.slice(-1);
  },

  set amount(amt) {
    return this.amountEntered.push(amt);
  },
};
console.log(personAccount.amount); // we got the required value 40000
personAccount.amount = 100;
console.log(personAccount.amountEntered); // we set 100 to the array

// MATRIX PROBLEMS
const repMatrix = function () {
  const gnMatrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  for (let i = 1; i < gnMatrix.length; i++) {
    if (gnMatrix.indexOf([i]) !== 0) {
      for (let j = 1; j < gnMatrix.length; j++) {
        if (gnMatrix.indexOf([j]) !== 0) {
          gnMatrix[i][j] = 0;
        } else {
          gnMatrix[i][j] = 1;
        }
      }
    }
  }
  console.log(gnMatrix);
};

repMatrix();

const repMatrix1 = function () {
  const gnMatrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  for (let i = 1; i < gnMatrix.length; i++) {
    for (let j = 1; j < gnMatrix.length; j++) {
      if (i === 0 || j === 0) {
        continue;
      } else {
        gnMatrix[i][j] = 0;
      }
    }
  }
  console.log(gnMatrix);
};

repMatrix1();

//ADDITION OF TWO MATRIX
const matA = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
const matB = [
  [4, 4, 4],
  [5, 5, 5],
  [6, 6, 6],
];

const addMatrices = function (mat1, mat2) {
  let newMatrix = [];
  for (let i = 0; i < mat1.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < mat1[i].length; j++) {
      newMatrix[i][j] = mat1[i][j] + mat2[i][j];
    }
  }

  return newMatrix;
};

console.log(addMatrices(matA, matB));

// subtraction of matrices

const subMat1 = [
  [5, 5, 5],
  [4, 4, 4],
  [3, 3, 3],
];

const subMat2 = [
  [3, 3, 3],
  [2, 2, 2],
  [1, 1, 1],
];

const subtractMatrices = function (mat1, mat2) {
  let newMat = [];
  for (let i = 0; i < mat1.length; i++) {
    newMat[i] = [];
    for (let j = 0; j < mat1.length; j++) {
      newMat[i][j] = subMat1[i][j] - subMat2[i][j];
    }
  }
  return newMat;
};

console.log(subtractMatrices(subMat1, subMat2));

// multiplication of matrices
const multiMat1 = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1],
];

const multiMat2 = [
  [2, 3, 1],
  [2, 3, 1],
  [2, 3, 1],
];

const multiplyMatrices = function (mat1, mat2) {
  let newMultiMat = [];
  for (let i = 0; i < mat1.length; i++) {
    newMultiMat[i] = [];
    for (let j = 0; j < mat1.length; j++) {
      newMultiMat[i][j] = mat1[i][j] * mat2[i][j];
    }
  }
  return newMultiMat;
};

console.log(multiplyMatrices(multiMat1, multiMat2));

let transposeMat = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];

// transpose matrix
const transposeMatrix = function (mat) {
  const result = [];
  for (let i = 0; i < mat[0].length; i++) {
    const newArr = [];
    for (let j = 0; j < mat.length; j++) {
      newArr.push(mat[j][i]);
    }
    result.push(newArr);
  }
  return result;
};

console.log(transposeMatrix(transposeMat));

// count occurance of a string
const countChar = function (str) {
  const count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (count[char] > 0) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};
console.log(countChar("HelloWorld"));

//find largest number less than a given number and without a given digit
// If 145 is the given number and 4 is the given digit,
//then you should find the largest number less than 145 such that it should not contain 4 in it.
//In this case, 139 will be the answer.

function findLargestNumberWithoutDigit(givenNumber, givenDigit) {
  for (let i = givenNumber - 1; i > 0; i--) {
    if (i.toString().indexOf(givenDigit.toString()) === -1) {
      return i;
    }
  }
  return -1; // If no such number is found
}

const givenNumber = 145;
const givenDigit = 4;
const resultNum = findLargestNumberWithoutDigit(givenNumber, givenDigit);
console.log(resultNum);

// find all pairs of elements in an array whose sum is equal to given number
//if {4, 5, 7, 11, 9, 13, 8, 12} is an array and 20 is the given number,
// then you have to find all pairs of elements in this array whose sum must be 20.
//  In this example, (9, 11), (7, 13) and (8, 12) are such pairs whose sum is 20.

const getPairs = function () {
  const array = [4, 5, 7, 11, 9, 13, 8, 12];
  const givenNo = 20;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == givenNo) {
        console.log([array[i], array[j]]);
      }
    }
  }
};

getPairs();

// How to find continuous sub array whose sum is equal to given number

//If {12, 5, 31, 9, 21, 8} is the given array and 45 is the given number,
//then you have to find continuous sub array in this array such that whose elements add up to 45.
//In this case, {5, 31, 9} is such sub array whose elements add up to 45.

const gnArr = [12, 5, 31, 9, 21, 8];
const gnNumber = 45;
const sum = (gnArr) => gnArr.reduce((a, b) => a + b); // total sum of the array
// reduces the array into a single value
const getArr = function (arr, num) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    const arr1 = [];
    for (let j = i; j < arr.length; j++) {
      arr1.push(arr[j]);
      //console.log(arr1);
      // each element is pushed into the arr1 array
      if (sum(arr1) === num) {
        resArr.push([...arr1]);
      }
    }
  }
  return resArr;
};

console.log(getArr(gnArr, gnNumber));

// to check whether a number is binary or not

const isBinary = function (num) {
  const digits = String(num)
    .split("")
    .map((num) => Number(num)); // converting a number to an array

  for (let i of digits) {
    if (i !== 0 && i !== 1) return false;
  }
  return true;
};
console.log(isBinary(10010111899));

function isArrayBool(array) {
  for (var i of array) {
    if (i !== 0 && i !== 1) return false;
  }
  return true;
}

console.log(isArrayBool([1, 0, 0, 0, 1])); // true
console.log(isArrayBool([1])); // true
console.log(isArrayBool([2, 3, 0])); // false

// remove duplicate elements from ArrayList

const sampleArr = [1, 2, 3, 4, 1, 2, 3, 7, 5, 8, 4, 6, 9, 1];
const nonduplicates = new Set([...sampleArr]);
console.log(nonduplicates);
const dups = [...new Set(sampleArr)];
console.log(dups);

const originals = function (arr) {
  const original = arr.filter((el, index) => arr.indexOf(el) === index);

  return original;
};
console.log(originals(sampleArr));

const originalArr = function (arr) {
  const unique = [];
  arr.forEach((el) => {
    if (!unique.includes(el)) {
      unique.push(el);
    }
  });

  return unique;
};
console.log(originalArr(sampleArr));

const originalArray = function (arr) {
  const unique = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return unique;
};
console.log(originalArray(sampleArr));

const entry1 = "girl1 ";
const result1 = entry1.repeat(3);
console.log(result1);
// to check whether one string is a rotation of another

let checkRotatedString = function (str1, str2) {
  const str1Arr = str1.split("").sort().toString();
  const str2Arr = str2.split("").sort().toString(); // without converting the array into a string we will get false
  console.log(str1Arr, str2Arr);

  str1Arr === str2Arr
    ? console.log("Rotation string")
    : console.log("Not a rotation string");
};
checkRotatedString("LearningJavascript", "JavascriptLearning"); // true
checkRotatedString("LearningJavascript", "JavascriptLearnings"); // false

//INTERSECTION OF TWO ARRAYS (COMMON ELEMENTS)
const commonArr1 = [1, 3, 6, 7, 8, 9];
const commonArr2 = [3, 6, 8, 1, 4];
console.log(...commonArr1, ...commonArr2);

const commonElements = function (arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
};
console.log(commonElements(commonArr1, commonArr2));

// TO CHECK WHETHER A INPUT IS A NUMBER OR NOT

const checkInputNum = function (input) {
  typeof input == "number"
    ? console.log("numeric")
    : console.log("not numeric");
};
checkInputNum(12345); // integer
checkInputNum("12345"); // integer
checkInputNum("123dfg"); // not an integer

const checkNum = function (input) {
  if (Number.isInteger(input)) {
    console.log("integer");
  } else {
    console.log("not an integer");
  }
};
checkInputNum(12345); // integer
checkInputNum("12345"); // integer
checkInputNum("123dfg"); // not an integer

// reverse each word of a string
const gnStr = "welcome to bangalore";
const gnStrReverse = gnStr.split("").reverse().join("");
console.log(gnStrReverse);

const reverseGnString = function (str) {
  const result = [];
  const string = [...str];
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }
  return result.join("");
};
console.log(reverseGnString(gnStr));

// to remove zeros from non-zeros in an array

let zeroArr = [0, 0, 9, 4, 5, 6, 0, 1, 2, 0, 0, 5, 0, 0, 2];
const nonZeroArr = function (gnArr) {
  const output = [];

  for (let i = 0; i < gnArr.length; i++) {
    if (gnArr[i] !== 0) {
      output.push(gnArr[i]);
    }
  }
  return output;
};
console.log(nonZeroArr(zeroArr));

// to separate zeros from non-zeros in an array

let zeroArr1 = [0, 0, 9, 4, 5, 6, 0, 1, 2, 0, 0, 5, 0, 0, 2];

const separateArr = function (arr) {
  const zeroArr = [];
  const nonZeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      nonZeroArr.push(arr[i]);
    }
  }
  return nonZeroArr.concat(zeroArr);
};
console.log(separateArr(zeroArr1));

//  Decimal To Binary, Decimal To Octal And Decimal To HexaDecimal

const decimalArr = [4, 8, 112, 67, 50];
const binary = function (arr) {
  return arr.map((el) => el.toString(2));
};
console.log(binary(decimalArr));

const octal = function (arr) {
  return arr.map((el) => el.toString(8));
};
console.log(octal(decimalArr));

const hexaDecimal = function (arr) {
  return arr.map((el) => el.toString(16));
};
console.log(hexaDecimal(decimalArr));

//  to find all the leaders in an integer array
//An element is said to be a leader if all the elements on it’s right side are smaller than it.
//Rightmost element is always a leader.
//For example, if {14, 9, 11, 7, 8, 5, 3} is the given array
//then {14, 11, 8, 5, 3} are the leaders in this array.

const leaderArr = [14, 9, 11, 7, 8, 5, 3];

const leaders = function (arr) {
  let maxFromRight = arr[leaderArr.length - 1];
  const output = [maxFromRight];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (maxFromRight < arr[i]) {
      maxFromRight = arr[i];
      output.unshift(maxFromRight); // adds at the beginning of the output array
    }
  }
  console.log(output);
};
leaders(leaderArr);

// selection sort of an array

const arraySort1 = [4, 7, 1, 3, 9, 2];

// ascending order
const selectionSortAsc = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
console.log(selectionSortAsc(arraySort1));

//descending order
const selectionSortDes = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if (i !== max) {
      [arr[i], arr[max]] = [arr[max], arr[i]];
    }
  }
  return arr;
};
console.log(selectionSortDes(arraySort1));

//reverse untill you get a palindrome

function reverseNumber(n) {
  return parseInt(n.toString().split("").reverse().join(""));
}

function isPalindrome(num) {
  return num === reverseNumber(num);
}

function reverseAndAddToPalindrome(n) {
  let iterations = 0;
  let num = n;

  while (!isPalindrome(num)) {
    if (iterations >= 1000) {
      // Limiting the number of iterations to avoid infinite loops
      return "No palindrome exists";
    }

    num += reverseNumber(num);
    iterations++;
  }

  return num;
}

console.log(reverseAndAddToPalindrome(195)); // Output: 9339
console.log(reverseAndAddToPalindrome(265)); // Output: 45254
console.log(reverseAndAddToPalindrome(196)); // Output: No palindrome exists

//Reverse the string with preserving the position of spaces
//example, if “I Am Not String” is the given string
//then the reverse of this string with preserving the position of spaces is “g ni rtS toNmAI”.

const stringRev = "I Am Not String";

const stringReverseWithPositions = function (stg) {
  const newRevStr = stg.replaceAll(" ", "").split("").reverse();
  //console.log(newRevStr);
  for (let i = 0; i < newRevStr.length; i++) {
    if (stg[i] === " ") {
      newRevStr.splice(i, 0, " "); // 0 replaces 0 elements
    }
  }

  return newRevStr.join("");
};
console.log(stringReverseWithPositions(stringRev));

//Roman equivalent of a decimal number

const toRoman = (num, result = " ") => {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (key in map) {
    if (num >= map[key]) {
      if (num !== 0) return toRoman(num - map[key], result + key);
    }
  }
  return result;
};
console.log(toRoman(402)); // CDII
console.log(toRoman(3000)); // MMM
console.log(toRoman(93)); // XCIII
console.log(toRoman(4)); // IV

// percentage of uppercase, lowercase, digits and special characters in a string

const findPercentage = function (characters) {
  let count = 0;
  const elements = characters.split("");
  for (let j = 0; j < elements.length; j++) {
    if (elements !== 0) {
      count++;
    }
  }
  //console.log(count);
  let upper = 0;
  let lower = 0,
    digits = 0,
    special = 0;

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] >= "A" && characters[i] <= "Z") {
      upper++;
    } else if (characters[i] >= "a" && characters[i] <= "z") {
      lower++;
    } else if (characters[i] >= "0" && characters[i] <= "9") {
      digits++;
    } else {
      special++;
    }
  }

  console.log("Upper case letters: " + (upper / count) * 100 + "%");
  console.log("Lower case letters : " + (lower / count) * 100 + "%");
  console.log("Number : " + (digits / count) * 100 + "%");
  console.log("Special characters : " + (special / count) * 100 + "%");
};

findPercentage("ASDas31@#09^&44y");

//  Find missing number in an array
// If n = 8, then array ‘a’ will have 7 elements in the range from 1 to 8.
//For example {1, 4, 5, 3, 7, 8, 6}. One number will be missing in ‘a’ (2 in this case).
//You have to find out that missing number.

const missingArr = [1, 4, 5, 3, 7, 8, 6];
const findMissingNum = function (arr) {
  const min = Math.min(...arr); // will find the highest num
  const max = Math.max(...arr); // will find the lowest num
  let missingNum = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missingNum.push(i);
    }
  }

  return missingNum;
};
console.log(findMissingNum(missingArr));

//Generate random numbers
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); // gives a random number from 1 to 99

const getRandom = Math.floor(Math.random() * 5) + 1;
console.log(getRandom); // gives a random number from 1 to 5

// sort a string into uppercase, lowercase, numbers and special characters

const myString = "A54h AW!*&";

const arrangeChar = function (string) {
  let upperStr = [],
    lowerStr = [],
    numStr = [],
    specialStr = [];

  let str = string.split("");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      upperStr.push(str[i]);
    } else if (str[i] >= "a" && str[i] <= "z") {
      lowerStr.push(str[i]);
    } else if (str[i] >= "0" && str[i] <= "9") {
      numStr.push(str[i]);
    } else {
      specialStr.push(str[i]);
    }
  }
  return upperStr.concat(lowerStr).concat(numStr).concat(specialStr);
};

console.log(arrangeChar(myString));

// longest substring without repeating characters in a string
// if “javaconceptoftheday” is the input string,
//then the longest substring without repeating or duplicate characters is “oftheday”

const string1 = "javaconceptoftheday";

function lengthOfLongestSubstring(str) {
  const map = new Map();
  let max = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (map.get(char) >= left) left = map.get(char) + 1;
    else max = Math.max(max, right - left + 1);
    map.set(char, right);
  }
  return max;
}
console.log(lengthOfLongestSubstring(string1));

// count occurrences of each element in an array
//if {12, 9, 12, 9, 10, 9, 10, 11} is the input array,
//then the count of occurrences of each element is {12:2, 9:3, 10:2, 11:1}.

const arrayCount = [12, 9, 12, 9, 10, 9, 10, 11];
const countArr = function (arr) {
  let count = {};
  for (let num of arr) {
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  return count;
};

console.log(countArr(arrayCount));
// for in loop is used to access an object
// for of loop is used to access an element in an array

// reverse an array
const exArr = [12, 9, 21, 17, 33, 7];

const revArr = function (arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.unshift(arr[i]); // output.push(arr[i].pop()) can also be used
  }
  return output;
};
console.log(revArr(exArr));

const variableSwap = function () {
  let black = "yes";
  let white = "no";
  if ((black = "yes") && (white = "no")) {
    black = "no";
    white = "yes";
  }
  return black + " " + white;
};

console.log(variableSwap());

// remove duplicates from an array
let duplicateArray = [4, 3, 2, 4, 9, 2];
const realArr = new Set(duplicateArray);
console.log(realArr); // returns an object

const removeDuplicates = function (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(removeDuplicates(duplicateArray));

// most repeated char in a string
const schoolName = "St.Dominics";

const mostRepChar = function (str) {
  let char = str.toLowerCase().split("").sort();
  //console.log(char);
  const charMap = {};
  let max = 0;
  maxinumChar = "";

  for (let el of char) {
    if (charMap[el]) {
      charMap[el]++;
    } else {
      charMap[el] = 1;
    }
  }

  for (let el in charMap) {
    if (charMap[el] > max) {
      max = charMap[el];
      maxinumChar = el;
    }
  }
  return "the character " + maxinumChar + " is repeated " + max + " times";
};
console.log(mostRepChar(schoolName));

// most repeated element in an array

const myFavArr = [
  1, 7, 3, 66, 9, 1, 4, 9, 7, 5, 6, 3, 4, 0, 8, 1, 5, 7, 7, 9, 2, 3, 1,
];

const maxArrElement = function (arr) {
  let arrMap = {};
  maxEl = 0;
  max = 0;

  for (el of arr) {
    if (arrMap[el]) {
      arrMap[el]++;
    } else {
      arrMap[el] = 1;
    }
  }
  for (el in arrMap) {
    if (arrMap[el] > max) {
      max = arrMap[el];
      maxEl = el;
    }
  }
  return "the number " + maxEl + " is repeated " + max + " times";
};
console.log(maxArrElement(myFavArr));

// find number of characters,digits and special characters
const mixedStr = "123ADNGUNbdybdmr8*%#%&*jhujbjghDESF12398";
const numberOfelements = function (str) {
  const el = str.split("").sort();
  //console.log(el);
  let uppercase = 0,
    lowercase = 0,
    digits = 0,
    specialChar = 0;
  for (let i = 0; i < el.length; i++) {
    if (el[i] >= "0" && el[i] <= "9") {
      digits++;
    }
    if (el[i] >= "a" && el[i] <= "z") {
      lowercase++;
    }
    if (el[i] >= "A" && el[i] <= "Z") {
      uppercase++;
    } else {
      specialChar++;
    }
  }

  return `uppercase: ${uppercase}, lowercase: ${lowercase}, digits: ${digits}, specialChar: ${specialChar}`;
};
console.log(numberOfelements(mixedStr));

// permutation of a string recursively

const perArr = [1, 2, 3, 4];
const permutation = function (arr) {
  let resultArr = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];
  for (let i = 0; i < arr.length; i++) {
    const currElement = arr[i];
    const otherElements = arr.slice(0, i).concat(arr.slice(i + 1));
    const swappedEls = permutation(otherElements);

    for (let j = 0; j < swappedEls.length; j++) {
      const finalSwap = [currElement].concat(swappedEls[j]);
      resultArr.push(finalSwap);
    }
  }
  return resultArr;
};
console.log(permutation(perArr));
