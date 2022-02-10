//type of array is object
//creating arrays
//1. direct method
const fruits =["apple","pineapple","grapes","orange","watermelon"]
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

//joining 2 arrays
//concat :it creates a new array joining the 2 or more arrays and does not change the existing arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);
console.log(children)
