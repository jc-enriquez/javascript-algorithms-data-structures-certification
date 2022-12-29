//First task
//This is an inline comment

/* This is a 
multi-line comment*/

//Second task
var myName;

//Third task
var a = 7;

//Fourth task
var b;
b = 7;
var c;
c = b;

//Fifth task
var a = 9;

//Sixth task
var myFirstName = "John Christopher";
var myLastName = "Enriquez";

//Seventh task
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//Eigth task
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;

//Ninth task
let catName = "Oliver";
let catSound = "Meow!";

//Tenth task
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

//11th task
const sum = 10 + 10;

//12th task
const difference = 45 - 33;

//13th task
const product = 8 * 10;

//14th task
const quotient = 66 / 33;

//15th task
let myVar = 87;

myVar = ++myVar;

//16th task
let myVarDecrement = 11;

// Only change code below this line
myVarDecrement = --myVarDecrement;

//17th task
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 2.2;

//18th task
const productDecimal = 2.0 * 2.5;

//19th task
const quotientDecimal = 4.4 / 2.0; // Change this line

//20th task
const remainder = 11 % 3;

//21st task
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//22nd task
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//23rd task
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//24th task
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//25th task
const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

//26th task
const myStrQuotes = '<a href="http://www.example.com" target="_blank">Link</a>';

//27th task
const myStrLong = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//28th task
const myStrConcat = "This is the start. " + "This is the end."; // Change this line

//29th task
let newStr = "This is the first sentence. ";
newStr += "This is the second sentence.";

//30th task
// Only change code below this line
const myName = "John Christopher Enriquez";
const newerStr = "My name is " + myName + " and I am well!";

//31st task
// Change code below this line
const someAdjective = "fun";
let sentence = "Learning to code is ";

sentence += someAdjective;

//32nd task
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//33rd task
// Setup
let firstLetterOfLastName = "";
const lastNameNewer = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//34th task
// Setup
let newestStr = "Jello World";

// Only change code below this line
newestStr = "Hello World"; // Change this line
// Only change code above this line

//34th task
// Setup
const lastNameNew = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastNameNew[2]; // Change this line

//35th task
// Setup
const newerLastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = newerLastName[newerLastName.length - 1]; // Change this line

//36th task
// Setup
const lastNameSecond = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastNameSecond[lastNameSecond.length - 2]; // Change this line

//37th task
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

//38th task
// Only change code below this line
const myArray = ["This is my string", 2];

//39th task
// Only change code below this line
const newArray = [
  ["Lakers", 24],
  ["Warriors", 30],
];

//40th task
const newerArray = [50, 60, 70];

const myData = newerArray[0];

//41st task
// Setup
const newestArray = [18, 64, 99];

// Only change code below this line
newestArray[0] = 45;

//42nd task
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const nestedData = nestedArray[2][1];

//43rd task
// Setup
const pushArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
pushArray.push(["dog", 3]);

//44th task
// Setup
const poppedArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = poppedArray.pop();

//44th task
// Setup
const popArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const poppedFromMyArray = popArray.pop();

//45th task
// Setup
const shiftArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
const shiftedFromMyArray = shiftArray.shift();

//Push & Pop - removes & adds new item to the last part of the array
//Shif & Unshift - removes & adds new item to the first part of the array

//46th task
// Setup
const unshiftArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line
unshiftArray.unshift(["Paul", 35]);

//47th task
const myList = [
  ["Keyboard", 50],
  ["Mouse", 40],
  ["Monitor", 30],
  ["Webcam", 20],
  ["Speakers", 10],
];

//48th task
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//49th task
function functionWithArgs(x, y) {
  console.log(x + y);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

//50th task
function timesFive(num) {
  return num * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);

//51st task
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//52nd task
function myLocalScope() {
  // Only change code below this line
  const myVar = "";

  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//53rd task
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

//54th task
// Setup
let summ = 0;

function addThree() {
  summ = summ + 3;
}

// Only change code below this line

function addFive() {
  summ = summ + 5;
}

// Only change code above this line

addThree();
addFive();

//55th task
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processArg(7);

processed = processArg(7);

//56th task
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const shiftedItem = arr.shift();
  return shiftedItem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//57th task
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//58th task
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line
}

//59th task
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//60th task
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//61st task
// Setup
function compareEquality(a, b) {
  if (typeof a === typeof b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//62nd task
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//63rd task
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//64th task
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//65th task
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//66th task
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//67th task
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//68th task
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//69th task
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
