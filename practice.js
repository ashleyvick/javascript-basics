//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

var myName = 'Ashley'; //Code here

//////////////////PROBLEM 2////////////////////

//Create a variable called myAge that is a number data type

var myAge = 33; //Code here

//////////////////PROBLEM 3////////////////////

//Create a variable called lovesCode that is a boolean data type

var lovesCode = true; //Code here

//////////////////PROBLEM 4////////////////////

//Create a variable called greatestFear that is undefined because we fear nothing

var greatestFear = undefined //Code here

//////////////////PROBLEM 5////////////////////

//Create a variable called devMountainGoal that is null because we are just starting out

var devMoutainGoal = null //Code here

//////////////////PROBLEM 6////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(name) {
  return "Hello, " + name; }
//Code here

//////////////////PROBLEM 7////////////////////

//Write a function expression called newGreeting.
//Give it the same functionality as the function greeting in Problem 6.

var newGreeting = function(name)

//////////////////PROBLEM 8////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

var groceries = ['apples', 'milk', 'eggs', 'bread'] //Code Here

//////////////////PROBLEM 9////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

var dog = {
  name: 'Toby',
  color: 'brown', 
  age: 4,
  goodBoy: true
} //Code Here

//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

var devmountainClassPet = dog['name'];//Code Here

//////////////////PROBLEM 10////////////////////

//Write a function called nameCheck that takes in a name parameter.
//nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
//If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in (not literally NAMEPARAM)

function nameCheck (name) {
  if (name = 'Steven');


}

// Code here

//////////////////PROBLEM 11////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

function add (num1, num2) {
return num1 + num2;
}

//Code Here

//Now invoke add, passing in the numbers 3 and 4
//storing the result in the variable mathSum.

add(3,5);

//Code Here

//////////////////PROBLEM 12////////////////////

//Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'

function faveColorFinder ("color") {
  if color == "red" }

}

// Code here

//////////////////PROBLEM 13////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"];

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["sailorDuck", "rubberDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["sailorDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["realDuck"];

//////////////////PROBLEM 14////////////////////

//Create a variable called age with your age assigned to you

var age = 33// Code Here

// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older

age = age+1; // Code Here

// Good news! We can live forever. Set your age to 999
age = 999
// Code Here
