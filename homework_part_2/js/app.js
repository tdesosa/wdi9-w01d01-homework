console.log("Ready for action!");

// Q1) Concatenation places strings together

console.log('Homework sucks, ' + 'Homework really sucks.');

// Q1) Interpoloation places strings, variables, or expressions together

const test = 'Homework sucks, ';
const test2 = 'Homework really sucks.';

//console.log(test + test2);
console.log(`${test}${test2}`);

/* Q2) DRY stands for "Don't Repeat Yourself."
We should pay attention to the DRY "rule" 
beacuase it helps make our code shorter
and easier for others to understand. Loops
are an example of DRY code we have learned */

/* Q3) Declaring a variable is simply expressing that the
variable exist. Assigning a value to a variable is the
act of giving a varaialbe a specific value (diff the
undefined). Defining a variable is the act of both
declaring and assining a variable. */

/* Q4) const should be used to define a variable that will
not be defined again at a seperate instance in your code.
let should be used to define a variable that could be used
in a seperate instance in your code. */

/* Q5) A parent directoy is a directory that contains
additonal directories inside of it. */

/* Q6) command is: man (command)

/* Q7) tab completion allows you to use the "tab" button
on your keyboard to complete a directory or file name. It
is awesome because it saves time and typing! */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a + a < d);
console.log(e === 'Kevin');
console.log(48 !== '48');

// 1. Infinite loop? Yes
// 2. Infinite loop II? Yes


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

/*
The first line assigns the value "A" to the variable
letters. 

The second line assings the value 0 to the variable 
i.

The thrid line starts a while loop that has a conditon 
of i < 20 which means the while loop will run until 
i reaches a value of 20.

The fourth line will add the string "A" to the letters
variable.

The fifth line adds 1 to the to the variable i and returns
to the while loop condition.

The last line prints the value of the letters variable once
the while loop is completed to the console.
*/

// Part 4: Loops!

/* Q1) for loops allow you to set parameters within the condition
while the while loops require you to set the conditions within the 
object. */

for(let i = 0; i <= 999; i++){
    console.log(i);
};

// Q3) The first part of the control statement is: let i = 0;
// ^ This part gives i a value of 0.
// Q3) The second part of the control statement is: i < 100;
// ^ This part states the four loop should run up to 100 times
// Q3) The third part of the control statement is: i++;
// ^ This parts dictates that i should be increase by 1

for(let i = 999; i >= 0; i--){
    console.log(i);
};

for(let i = 1; i <= 10; i++){
    console.log(`The value of i is: ${i} of 10`);
};




