// While Loop
while (condition) {
  // code block to be executed
}

let i = 0;

while (i < 5) {        
  console.log(i);
  i++;
}



// Reverse Loop
const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot



// Do…While Statement
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);

// Prints: 0 1 3 6 10



// For Loop

for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

// Output: 0, 1, 2, 3



// Looping Through Arrays
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// Output: Every item in the array



// Break Keyword

for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i)
}

// Output: 0 1 2 3 4 5



// Nested For Loop
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/