
//1) Create an array named "food" it should look like this: ['okra', 'carrots', 'kale', 'spinach', 'onion', 'apples', 'bananas', 'grapes', 'oranges']
var food = ['okra', 'carrots', 'kale', 'spinach', 'onion', 'apples', 'bananas', 'grapes', 'oranges'];
console.log(food);
//2) Remove one element from the end of the array
food.pop();
//3) Add strawberries on the end of the array
fruits.push("strawberries");
console.log(food)
//4) Remove one element from the front of the array
food.shift();
//5) Add "broccoli" on to the front of the array
fruits.push("broccoli");
console.log(food)
//6) Using the slice method create a new array named "veggies" it should have all the veggies from "food" as elements of the "veggies" array. HINT: veggies is the first half of food array OUTPUT: veggies = ["broccoli", "carrots", "kale", "spinach", "onion"]
var veggies = food.slice(0,5);
//7) Using the slice method create a new array named "fruit" it should have all the fruits from "food" as elements of the array "fruits" array. HINT: fruits is the seconds half of the food array OUTPUT: fruit = ["apples", "bananas", "grapes", "strawberries"]
var fruit = food.slice(0,4);
//8) Using the splice method remove "onion" from the "food" array
food.splice(4,1,);
//9) Using the splice method remove "kale" & "spinach" from the "food" array and replace it with "brussels sprouts" OUTPUT: food = ["broccoli", "carrots", "brussels sprouts", "apples", "bananas", "grapes", "strawberries"]
food.splice(2,2, "brussels sprouts");
//10) Create a variable "text" and set it to the string "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
//11) Using [ ] notation console.log( ) the "," from the text variable
console.log(Text[5]);
//12) Using [ ] notation console.log( ) the the last character (".") from the text variable
console.log(Text[56]);
//13) Create a new variable named "lorem" assign it the value of "Lorem" by slicing it from the text variable
//DO NOT: var lorem = "Lorem"; DO: var lorem = text.slice(?, ?);
var lorem = text.slice(1, 3);
//14) Create a new variable named "chores1" set it to the string "clean, pay bills, groceries"
var chores1 = ["clean, pay bills, groceries"];
//15) Create a new variable named "chores2" set it to the string "learn JS, doctors office, pick up kids"
var chores2 =["learn JS, doctors office, pick up kids"];
//NOTE: There are many ways to accomplish step 16, there is no wrong answer if you get the right result EXCEPT for var allChores = ["clean", " pay bills", " groceries", "learn JS", " doctors office", " pick up kids"] is wrong for obvious reasons
//16) Create a new variable named "allChores" it should be an array of all the chores form "chores1" and "chores2" OUTPUT: ["clean", " pay bills", " groceries", "learn JS", " doctors office", " pick up kids"] HINT: split and concatenation
var allChores = chores1 + ", " + chores2;