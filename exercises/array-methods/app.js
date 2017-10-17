var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.
vegetables.pop();

//Remove the first item from the fruit array.
fruit.shift();

//Find the index of "orange."
var thirdStepReturn = fruit.indexOf("orange");

//Add that number to the end of the fruit array.
fruit.push(thirdStepReturn);

//Use the length property to find the length of the vegetable array. Log that to the console.
var fifthStepReturn = vegetables.length;

console.log(fifthStepReturn);

//Add that number to the end of the vegetable array.
vegetables.push(fifthStepReturn);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);

//Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);

//Reverse your array.
food.reverse();
//Log your array as a string to the console.
console.log(food.join());
