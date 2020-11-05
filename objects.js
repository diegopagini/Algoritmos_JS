// Dot Notation for Accessing Object Properties
const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'



// Restrictions in Naming Properties
// Example of invalid key names

// const trainSchedule = {
//   platform num: 10, // Invalid because of the space between words.
//   40 - 10 + 2: 30, // Expressions cannot be keys.
//   +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
// }



// Objects

// Accessing non-existent JavaScript properties
const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined



// JavaScript Objects are Mutable
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

student = {}
// TypeError: Assignment to constant variable.



// JavaScript for...in loop

let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}



// Properties and values of a JavaScript object

const classOf2018 = {
  students: 38,
  year: 2018
}



// Delete operator
const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript"
};

delete person.hobby; // or delete person[hobby];

console.log(person);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/



// javascript passing objects as arguments
const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);



// JavaScript Object Methods
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

/* Console output:
The engine starts up noisily...
The engine sputters...
*/



// JavaScript destructuring assignment shorthand syntax
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'



// shorthand property name syntax for object creation
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }



// this Keyword
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};

console.log(cat.whatName()); 
// Output: Pipey



// javascript function this
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  }
}



// JavaScript Arrow Function this Scope
const myObj = {
  data: 'abc',
  loggerA: () => { console.log(this.data); },
  loggerB() { console.log(this.data); },
};

myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'



// getters and setters intercept property access
const myCat = {
  _name: 'Snickers',
  get name(){
    return this._name
  },
  set name(newName){
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  }
}



// javascript factory functions

// A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
}



// javascript getters and setters restricted
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;  
  },
  set name(newName) {
    this._name = newName;  
  }
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = 'Yankee';