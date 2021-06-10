//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require("readline-sync")
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruit = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

pantry = [proteins, grains, vegetables, beverages,]
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (let i = 0; i < 6; i++) {
  console.log(`Meal ${i + 1} is: ${proteins[i]}, ${grains[i]}, ${vegetables[i]}, ${beverages[i]}, ${fruit[i]}`);
}
console.log(`\n`)

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6. 

let mealsNumber = Number(input.question("How many meals would you like to assemble? \n(Please enter an integer between 1 and 6): "));

while (mealsNumber < 1 || mealsNumber > 6) {
  mealsNumber = input.question("Invalid entry.  Please enter a number between 1-6: ")
} 

console.log(`\nPrinting ${mealsNumber} meals:\n`)
for (let j = 0; j < mealsNumber; j++){
  console.log(`Meal ${j +1} is: ${proteins[j]}, ${grains[j]}, ${vegetables[j]}, ${beverages[j]}, ${fruit[j]}`);
  if (vegetables[j].includes("kale") === true) {
    console.log("(Don't worry, you can have double chocolate tomorrow!)\n")
  }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”