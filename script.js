//let name = "Mark";
//let greeting = `Hello, ${name}!`;
//console.log(greeting);

//let sentence = "Javascript is Awesome!";
//let position = sentence.indexOf("Awesome");
//console.log(position);

//let sentence = "JavaScript is awesome, and JavaScript is powerful!";
//let position = sentence.indexOf("JavaScript", 10);
//console.log(position); // 27

//let age = prompt("How old are you?");
//if (age !== null) {
  //console.log("You are " + age + " years old.");
//} else {
 // console.log("User canceled the prompt.");
//}

//let symbol = "!";
//console.log(symbol.charCodeAt(0));  // Output: 33

//let letter = "A";
//console.log(letter.charCodeAt(0));  // Output: 65

//let char = String.fromCharCode(97);
//console.log(char);  // Output: a
/*
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

let phrase1 = "JavaScript is awesome!";
let result1 = phrase.includes("Awesome");

console.log(result1);  // Output: false

let text = "Hello, JavaScript world!";
let result2 = text.includes("JavaScript", 7);

console.log(result2);  // true

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Output: Hello

let message1 = "Hello, world!";
let world = message1.slice(7);

console.log(world);  // Output: world!

let message2 = "JavaScript is fun!";
let lastWord = message2.slice(-4);

console.log(lastWord);  // Output: fun!

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);//


let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // Output: "HELLO, WORLD!"

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // Output: "i am learning javascript!"


let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");

console.log(newText);  // Output: "I love coding!"

let sentence = "I enjoy working with JavaScript.";
let updatedSentence = sentence.replace("javascript", "coding");

console.log(updatedSentence);  // Output: "I enjoy working with JavaScript."

let phrase = "Hello, world! Welcome to the world of coding.";
let updatedPhrase = phrase.replace("world", "universe");

console.log(updatedPhrase);  // Output: "Hello, universe! Welcome to the world of coding."

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // Output: "Hello!Hello!Hello!"

let word1 = "Test";
console.log(word1.repeat(-1));  // Throws RangeError: Invalid count value

let word2 = "Test";
console.log(word2.repeat(Infinity));  // Throws RangeError: Invalid count value


let message = "   Hello!   ";
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // Output: "Hello!"

let greeting = "   Hello!   ";
let trimmedStart = greeting.trimStart();

console.log(trimmedStart);  // Output: "Hello!   "

let greeting1 = "   Hello!   ";
let trimmedEnd = greeting1.trimEnd();

console.log(trimmedEnd);  // Output: "   Hello!"


const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number

const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN

const notANumber1 = 'hello world' / 2;
console.log(typeof notANumber1); // number


const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

const result1 = '10' + 5;

console.log(result1); // 105
console.log(typeof result1); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number



const subtractionResult1 = 'abc' - 5;
console.log(subtractionResult1); // NaN
console.log(typeof subtractionResult1); // number

const multiplicationResult1 = 'abc' * 2;
console.log(multiplicationResult1); // NaN
console.log(typeof multiplicationResult1); // number

const divisionResult1 = 'abc' / 2;
console.log(divisionResult1); // NaN
console.log(typeof divisionResult1); // number

const result11 = true + 1;
console.log(result11); // 2
console.log(typeof result11); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

const result12 = null + 5;
console.log(result12); // 5
console.log(typeof result12); // number

const result22 = undefined + 5;
console.log(result22); // NaN
console.log(typeof result22); // number



const result = 2 + 3 * 4;

console.log(result); // 14

const result1 = (2 + 3) * 4;

console.log(result1); // 20

const result2 = 10 - 2 + 3;

console.log(result2); // 11

let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10

const result3 = 2 ** 3 ** 2;

console.log(result3); // 512


let x = 5;

console.log(++x); // 6
console.log(x); // 6

let y = 5;

console.log(y++); // 5
console.log(y); // 6

let xx = 5;
console.log(--xx); // 4
console.log(xx); // 4

let yy = 5;
console.log(yy--); // 5
console.log(yy); // 4

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)


let num = 5;
num = num + 2;

console.log(num); // 7

let num1 = 5;
num1 += 2;

console.log(num1); // 7

let total = 10;
total += 5;

console.log(total); // 15

let score = 20;
score -= 7;

console.log(score); // 13

let score1 = 20;
score1 = score1 - 7;

console.log(score1); // 13

let points = 5;
points *= 3;

console.log(points); // 15

let balance = 100;
balance /= 4;

console.log(balance); // 25


Remainder assignment operator (%=), which divides a variable by the specified number and assigns the remainder to the variable.

Exponent assignment operator (**=), which raises a variable to the power of the specified number and reassigns the result to the variable.

Bitwise AND assignment operator (&=), which performs a bitwise AND operation with the specified number and reassigns the result to the variable.

Bitwise OR assignment operator (|=), which performs a bitwise OR operation with the specified number and reassigns the result to the variable.







let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
console.log("Sorry, you are not old enough to drive");
}

console.log(5 == "5"); // true
console.log(5 === '5'); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true


let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true

let a1 = 6;
let b1 = 9;
let c = 6;

console.log(a1 >= b1); // false
console.log(b1 >= a1); // true
console.log(a1 >= c); // true

let a2 = 6;
let b2 = 9;

console.log(a2 < b2); // true
console.log(b2 < a2); // false

let a3 = 6;
let b3 = 9;
let c3 = 6;

console.log(a3 <= b3); // true
console.log(b3 <= a3); // false
console.log(a3<= c3); // true

const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number


const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof str); // string
console.log(typeof strToNegativeNum); // number

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true

const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6

const result = void (2 + 2);

console.log(result); // undefined

<a href="javascript:void(0);">Click Me</a>

const value = 'Hello world';

console.log(typeof value); // string

let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a & b);  // Output: 1 (Binary: 001)

let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a | b);  // Output: 7 (Binary: 111)

let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a ^ b);  // Output: 6 (Binary: 110)

let a = 5;  // Binary: 101
console.log(~a);  // Output: -6

let a = 5;  // Binary: 101
console.log(a << 1);  // Output: 10 (Binary: 1010)

let a = 5;  // Binary: 101
console.log(a >> 1);  // Output: 2 (Binary: 10)


if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}

const age = 22;

if (age >= 18) {
 console.log("You're eligible to vote"); // You're eligible to vote

 
 const age = 15;

if (age >= 18) {
 console.log("You're eligible to vote"); // Code not running because age is less than 18
}


const age = 15;

if (age >= 18) {
 console.log("You're eligible to vote");
} else {
 console.log("You're not eligible to vote"); // You're not eligible to vote
}

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

condition ? expressionIfTrue : expressionIfFalse;

const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);

const result = true && 'hello';

console.log(result); // hello

const result = 0 && 3;

console.log(result); // 0

const result = false && 0;

console.log(result); // false

if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 

const result = 'This is truthy' || false;

console.log(result); // This is truthy

const result = 0 || 'This is truthy';

console.log(result); // This is truthy


let userInput;

if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}

const result = null ?? 'default';

console.log(result); // default

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light


const randomNum = Math.random();

console.log(randomNum); 
// any number between 0 and 1 – 0 inclusive and 1 exclusive

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 

console.log(Math.ceil(4.3)); // 5

console.log(Math.floor(4.7)); // 4

console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

Math.floor(Math.random() * (max - min)) + min;


const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20); 

console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64




let result = 0 / 0;
console.log(result); // Output: NaN

console.log(NaN === NaN); // Output: false

console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

function divide(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return "Error: Division resulted in NaN";
  }
  return result;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Infinity
console.log(divide(0, 0));   // "Error: Division resulted in NaN"

console.log(parseFloat("3.14"));     // Output: 3.14
console.log(parseFloat("3.14 abc")); // Output: 3.14
console.log(parseFloat("3.14.5"));   // Output: 3.14
console.log(parseFloat("abc 3.14")); // Output: NaN


console.log(parseInt("42"));       // Output: 42
console.log(parseInt("42px"));     // Output: 42
console.log(parseInt("3.14"));     // Output: 3
console.log(parseInt("abc123"));   // Output: NaN

console.log(parseFloat("  3.14"));  // Output: 3.14
console.log(parseInt("  42"));      // Output: 42

console.log(parseFloat("+3.14"));  // Output: 3.14
console.log(parseInt("-42"));      // Output: -42

let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"

console.log((3.14159).toFixed(3));  // Output: "3.142"
console.log((3.14449).toFixed(3));  // Output: "3.144"
console.log((3.14550).toFixed(3));  // Output: "3.146"

let num = 3.14159;
console.log(num.toFixed()); // Output: "3"

let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // Output: "Total: $21.59"
*/

let num = 5;
console.log(++num) // Output: 6
console.log(5 == '5');

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}

let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}


let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
//-------------------------------------------------------------
// FUNCTION 
function greet() {
  console.log("Hello, Jessica!");
}

function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!

function doSomething() {
    console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7

const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

function greetings(name) {
  console.log("Hello, " + name + "!");
}

const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

const greetings = name => {
  console.log("Hello, " + name + "!");
};

const greetings = () => {
  console.log("Hello");
};

const greetings = name => console.log("Hello, " + name + "!");

// This will produce syntax errors 
function greetings name console.log("Hello, " + name + "!");

const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15

const calculateArea = (width, height) => {
  return width * height;
}; 

const calculateArea = (width, height) => return width * height;

const calculateArea = (width, height) => width * height;


let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // Output: "I'm a global variable"
function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}

greet(); // Output: "Hello, local scope!"
console.log(message); // This will throw an error

if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // Output: "I'm in a block"
}
console.log(blockVar); // This will throw an error

// ---------------------------------------------------



let fruits = ["apple", "banana", "orange"];
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3

const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined

let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // Outputs: ["apple", "blueberry", "cherry", "date"]

const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]



const fruits = ["apple", "banana"];
fruits = ["This", "will", "not", "work"];
console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 


let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"

let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3

let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"

let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[2]); // Outputs: "cherry"

let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // Outputs: "Q"

let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]


let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"

array.indexOf(element, fromIndex)
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1

let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("grape");
console.log(index); // -1
let colors = ["red", "green", "blue", "yellow", "green"];
let index = colors.indexOf("green", 3);
console.log(index); // 4
