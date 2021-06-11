//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require("readline-sync")
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruit = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let pantry =[]

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (let i = 0; i < 6; i++) {
  pantry.push([proteins[i],grains[i],vegetables[i],beverages[i],fruit[i]]);

}
console.log(pantry)

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6. 

let mealsNumber = Number(input.question("How many meals would you like to assemble? \n(Please enter an integer between 1 and 6): "));

while (mealsNumber < 1 || mealsNumber > 6) {
  mealsNumber = input.question("Invalid entry.  Please enter a number between 1-6: ")
} 

console.log(`\nPrinting ${mealsNumber} meals:\n`)
for (let j = 0; j < mealsNumber; j++){
  console.log(`Meal ${j +1} is: ${pantry[j][0]}, ${pantry[j][1]}, ${pantry[j][2]}, ${pantry[j][3]}, and ${pantry[j][4]}`);
  let kaleCheck = pantry[j].join()
  if (kaleCheck.includes("kale") === true) {
    console.log("(Don't worry, you can have double chocolate tomorrow!)\n")
  }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”





///STUDIO EXERCISE B////

//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.
//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.
//For now, make sure the two strings contain the same number of characters!
console.log("\nStudio B\n")
let string1 = 'Rutabagas';
let string2 = 'Chemistry';
let newString = "";
let userCodeCombo = "";
if (string1.length === string2.length){
for (let i = 0; i < string1.length; i++){
    newString = newString + string1[i] + string2[i]
};
  
console.log(newString)
} else {
  console.log("Error: Strings are different lengths.")
}

//Testing User Input//

//CAMRY QUESTION: If initial user input is the wrong length, but new user input is the correct length, how do I get the joining code to run again, instead of just printing the newly entered string?//

let userCode1 = input.question("Enter the first code: ");
let userCode2 = input.question("Enter the second code: ");


if (userCode1.length === userCode2.length) {
if (userCode1.length !== userCode2.length) {
  while (userCode1.length !== userCode2.length){
  userCode2 = input.question(`Invalid entry. Second user code must contain ${userCode1.length} characters. \nPlease try again: `)}
} else if (userCode1.length === userCode2.length)
{
  for (let i = 0; i < userCode1.length; i++){
    userCodeCombo = userCodeCombo + userCode1[i] + userCode2[i]
};  

console.log(userCodeCombo)
console.log(`${userCodeCombo}\nSelf-destruct sequence activated!`)

} 

} else { 

while (userCode1.length !== userCode2.length){
  userCode2 = input.question(`Invalid entry. Second user code must contain ${userCode1.length} characters. Please try again: `)}

}
