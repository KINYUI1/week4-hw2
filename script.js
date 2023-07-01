// SECTION 1

// I) VARIABLES AND DATATYPES

//A. Q + A

/* 
-How do we assign a value to a variable? A. With the assignment operator 
-How do we change the value of a variable? A. By reassigning a different value to the variable if it was declared with a 'var' or a 'let' keyword, by creating an operation that decreases or increases the value of the varianle if it is a number, or putting the variable in a loop or a conditonal operation that changes its value base on the expression given.
-How do we assign an existing variable to a new variable? A. by using the assignment operator to assign the new variable equal to the old variable.
Remind me, what are declare, assign, and define? A. To 'SECLARE' a variable is the use one of the declaration keywords of either 'var, let, const' in creating a variable name eg ' let name;'.  To 'ASSIGN' a is to using the assignment opertor in giving value to and already declared variable eg ' let name = "Clement" ';. To 'DEFINE' is to simultaneusly declaring and assigning a value to a container in memory that be a variale, function.
-What is pseudocoding and why should you do it? A. Pseudocode is a plain-text description of a piece of code or an algorithm. It's not actually coding; there is no script, no files, and no programming.Pseudocode helps you plan out your app before you write it. It helps you create algorithms in a format that is easier to read than code syntax.
-What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. About 50% of the time should be spent analysing the problem and figuring out the best algorithm to solve the problem, 25% of the time to implement the algorithm in code and 25% of the remaining time in debugging and making sure the code runs as intended.
*/

//B. Strings

let firstVariable = "Hello World!";
firstVariable = 25;
let secondVariable = firstVariable;
secondVariable = "Another string";
console.log(firstVariable);
// value of firstVariable is 25
let yourName = 'Clement Kinyui Ndimuangu';
let greet = `Hello, my name is ${yourName}`;


//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 !== '48');

//D. The farm

let animal = 'cow';

if(animal = 'cow'){
    console.log('mooooo');
}else{
    console.log("Hey You're not a cow.");
}