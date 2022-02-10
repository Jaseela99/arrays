//type of array is object
//creating arrays
//1. direct method
const fruit =["apple","pineapple","grapes","orange","watermelon"]
//2.empty array
const colors =[];
colors[0]="blue"
colors[1]="red"
//3.new keyword
const cars = new Array("Saab", "Volvo", "BMW");


//changing any of the  array elements
cars[0]="audi"
console.log(cars)

//length is always higher than highest index of array
console.log(cars.length) 

//accessing first element
console.log(cars[0])
//accessing last element
console.log(cars[cars.length-1])

//looping through 

for (let i =0;i<cars.length;i++){
    console.log(cars[i])
}

//identify array
console.log(Array.isArray(cars))


//concat :it creates a new array joining the 2 or more arrays and does not change the existing arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);
console.log(children)

//copyWithin() method copies array elements to another position in the array.(array.copyWithin(target, start, end))
fruits.copyWithin(2, 0, 2);

//entries():method returns an Array Iterator object with key/value pairs
const f = fruits.entries();

//fill : array.fill(value, start, end)  method fills specified elements in an array with a value.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);

//filter :method creates a new array filled with elements that pass a test provided by a function.
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

//The includes() method returns true if an array contains a specified value.
fruits.includes("Banana", 3);

//The join() method returns an array as a string.
let text = fruits.join(" and ");

//keys :method returns an Array Iterator object with the keys of an array.
const keys = fruits.keys();

// The map() method creates a new array by performing a function on each array element.
const numbers =[1,2,3,4]
const squares =(numbers)=>numbers.map(a=>a*a)
console.log(squares)

//pop removes the last element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

//push adds to the last element
fruits.push("Kiwi");

//reverse
fruits.reverse()

//shift removes first element
fruits.shift();

//The slice() method returns selected elements in an array, as a new array.
const citrus = fruits.slice(1, 3);

//sorts the elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//The splice() method adds and/or removes array elements.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items: 
fruits.splice(2, 2);

//The toString() method returns a string with array values separated by commas.
fruits.toString()

//delete an index
delete fruits[0];

// The reduce() method runs a function on each array element to produce (reduce it to) a single value
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}



