// const s = "hello world"
// console.log(s);
// const greetingObject = new String(s);


// console.log(typeof greetingObject); // "object"
// console.log(greetingObject);
// console.log(s.length === greetingObject.length)

// const arr = [1, 2, 3];
// console.log(arr.toString()); // "1,2,3


// const shoppingList = [1,2,3,3,4]

// console.log(shoppingList.length);
// console.log(shoppingList.length);

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 40 }
// ];

// for (const person of people) {
//   console.log(` this is ${person.name} ,$
//     {person.age}`)
// }


// const sparseArray = [1, , , 4];
// console.log(sparseArray.length); // 4

// console.log(sparseArray[0]);

// const emptyArray = new Array(5);
// console.log(emptyArray);

// y =4;

// const a = new Array(y);


// console.log(typeof a);
// console.log(a)










// ..................double........................double....................

// CLOSURES..............

// Ex 1

/* function outerFunction(x) {
    let y = 10;
    function innerFunction(){
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);
closure(); // Output: 15 */





/* Ex2
function multiply(x) {
   
    return function (y) {
        return x * y;
    };
}

let double = multiply(2);
console.log(double(5));
console.log(double(10));
console.log(double(20));

 */




/*HIGHER ORDER FUNCTIONS 

In essence, a higher order function is a function 
that either takes one or more functions as arguments,
returns a function, or both.

function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
}
  return result;
}

function double(x) {
    return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]



*/



// ex of Call bakcs.../
// 1..foreach()...   make changes in the original Array
// 2..map()...       returns new Array
// 3..filter()..     filter elements and gives new array


// const developers = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 25 }
// ];

// const youngPeople = developers.filter((person) => person.age < 30 );
// console.log(youngPeople);




// 4.. Reduce()...  

/* const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15

 */



/* //METHOD CHANINIG

let obj = {
    value: 1,
    increment: function() {
        this.value++;
        return this;
    },
    double: function() {
        this.value *= 2;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

let result = obj.increment().double().increment().getValue();

console.log(result);

 */

// function processInput(input) {
//   if (typeof input !== "string") {
//     throw new TypeError("Input must be a string.");
//   }

//   return input.toUpperCase();
// }

// // console.log(processInput(8));

// try {
//   console.log("Starting to process input...");
//   const result = processInput(9);
//   console.log("Processed result:", result);
// } catch (error) {
//   console.error("Error occurred:", error.message);
// } 

 


// Classes (Object Oriented Programming)


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     console.log(`${this.name} says woof!`);
//   }
// }
// const dog = new Dog("Gino");
// console.log(dog.bark());


async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  let a = await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(typeof a);
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");




 


//   //  await new Promise(resolve => setTimeout(resolve, 2000));


