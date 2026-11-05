// Ways to declare a variable
// var, let, const

let firtName = 'John';
let lastName = 'Doe';

console.log(firtName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

// Reassigning Variables

age = 31;

console.log(age);

let score;

console.log(score);

if (true) {
	score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
	name: 'Brad',
};

person.name = 'John';

person.email = 'brad@gmail.com';

console.log(person);

// Declaring multiple variables

let a, b, c;

const d = 20,
	e = 30,
	f = 40;

console.log(e);

console.log(a);
