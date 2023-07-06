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

//E. Driver's Ed

let driverAge = 23;

if(driverAge >= 16){
    console.log('Here are the keys!');
}else{
    console.log("Sorry you're too young.");
}

//II. Loops

//A. The basics

for(let i = 0; i <= 10; i++){
    console.log(i);
}

//B. Get even

for(let i = 1; i <= 100; i++){
    if(!(i % 2)){
        console.log(`${i} is an even number`);
    }else{
        console.log(i);
    }
}

//C. Give me Five

for(let i = 0; i <= 100 ; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`I found a ${i}. High five!`);
        console.log(`I found a ${i}. Three is a crowd`);

    }else if(i % 5 === 0){
        console.log(`I found a ${i}. High five!`);
    }else if(i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

//D. Savings account

let bankAccount = 0;
let bonus = 0
for(let i = 1; i <= 10; i++){
    bankAccount += i;
}
for(let i = 1; i <= 100; i++){
    bonus += i;

}
bankAccount = (bonus*2);
console.log(bankAccount)


//III. Arrays & Control flow

//A. Talk about it:

/*
-What are the things in an array called? A. Elements in an Array
-Do Arrays guarantee those things will be in order? A. Yes unless you modify the array
-What real-life thing could you model with an array? A. Admissions list into a university or any institution.

 */

//B. Easy Does It

const quotes = [ "The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying."];

//C. Accessing elements

const randomThings = [1, 10, "Hello", true];
// use the array index which starts at zero.
randomThings[0];
randomThings[2] = "World";
console.log(randomThings);

//D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// use the array index which starts at zero.
ourClass[2];
ourClass[4] = 'Octocat';
ourClass.push('Cloud city');


//E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push('Aegon','Mr beast');
myArray.splice(4,1);
myArray.unshift('Bob Marley');
myArray.pop();
myArray.reverse();
//Did you mutate the array? What does mutate mean? Did the .reverse()method return anything? A. Yes the array is mutated. "MUTATE" change in form or design. it returned the reverse of the array.


//F. Biggie Smalls

let number = 200;
if(number < 100){
    console.log('Little number');
}else{
    console.log('Big number');
}

//G. Monkey in the Middle

let int = 7;
if(int < 5 ){
    console.log('Little number');
}else if(int > 10){
    console.log('Big number');
}else{
    console.log('Monkey');
}

//H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
  kristynsCloset.splice(6,0,'raybans');
  kristynsCloset[5] = 'stained knit hat';
  let thomsShirt = thomsCloset[0][0];
  let thomsPants = thomsCloset[1][0];
  let thomsAccessory = thomsCloset[2][2];
  console.log(`Thom is looking elegant in a ${thomsShirt}, ${thomsPants} and ${thomsAccessory}`);
  thomsCloset[1][2] = 'Footie Pajamas';
  

  //IV. Functions

  //A. printGreeting

  const printGreeting = (name) =>{
return(`Hello there, ${name}!`);
  }


console.log(printGreeting('Slimer'));

//B. printCool

const printCool = (name) =>{
    return(`${name} is cool`)
}

console.log(printCool("Captain Reynolds"));

//C. calculateCube

const calculateCube = (number) =>{
    return(number * number * number);
}

console.log(calculateCube(5));

//D. isVowel

const isVowel = (vowel) =>{
    let vowels = ['a','e','i','o','u'];
    return vowels.includes(vowel.toLowerCase())
}

console.log(isVowel("a"));

//E.getTwoLengths

const getTwoLengths = (str1,str2) =>{
return [str1.length, str2.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//F. getMultipleLengths

const getMultipleLengths = (string) => {
    let tempLength = [];
 for(let i = 0; i < string.length; i++){
    
    let value = string[i];
    tempLength.push(value.length);
    
 }
 return tempLength

}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G. maxOfThree

const maxOfThree = (a,b,c) =>{
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

console.log(maxOfThree(6, 9, 1));

//H. printLongestWord

const printLongestWord = (words) =>{
let wordIndex = 0;
let wordLength = 0;
for(let i = 0; i< words.length; i++){
    if(words[i].length > wordLength){
        wordLength = words[i].length;
        wordIndex = i;
    }
}
return words[wordIndex];
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



//V. Objects

//A. Make a user object

let user = {
    name: 'John',
    email : 'jjohn@gmail.com',
    age : 47,
    purchased : []
}


//B. Update the user

user.email = "johnsmith@yahoo.com";
user.age++;

//C. Adding keys and values

user.location = "Dallas";

//D. Shopaholic!

user.purchased.push('carbohydrates',"peace of mind","Merino jodhpurs");

console.log(user.purchased[2]);


//E. Object-within-object

user.friend = {
    name: 'james',
    age: 37,
    location: 'New York',
    purchased: []
}

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring","A latte");
console.log(user.friend.purchased[1]);

//F. Loops

for(let element in user.purchased){
    console.log(user.purchased[element]);
}
for(let element in user.friend.purchased){
    console.log(user.friend.purchased[element]);
}


//G. Functions can operate on objects

const updateUser = () => {
    user.age++;
    user.name.toUpperCase();
}

const oldAndLound = function(person){
    person.name.toUpperCase();
    person.age++;
}
oldAndLound(user);




//Cat Combinator


//1. Mama cat

const cat1 = {
    name: "Minuu",
    breed: "American Shorthair", 
    age: 2
}

console.log(cat1.age);
console.log(cat1.breed);


//2. Papa cat

const cat2 = {
    name: "pinuu",
    breed: "American Curl", 
    age: 3
}


//3. Combine Cats!

const combineCats = (mama,papa) =>{
    // console.log(mama);
    // console.log(papa);
    let combined = {};
    combined.name = mama.name + papa.name;
    combined.age = 1;
    combined.breed = mama.breed + '-' + papa.breed;
    return combined;

}

console.log(combineCats(cat1,cat2));

//4. Cat brain bender

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
