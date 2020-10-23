// Bublle Sort

// Con CLases.
class BubbleSort {
  constructor() {
    this.array = [8, 5, 6, 9, 22, 56, 4, 7, 9];
    this.buffer;
  }

  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.buffer = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = this.buffer;
        }
        // console.log(this.array);
      }
    }
  }
}

// Sin clases con funciones
const bubble = new BubbleSort();
bubble.sort();

const myArray = [8, 5, 6, 9, 22, 56, 4, 7, 9];
let temporal;

function bubleSort(theArray) {
  for (let i = 0; i < theArray.length; i++) {
    for (let j = 0; j < theArray.length; j++) {
      if (theArray[j] > theArray[j + 1]) {
        temporal = theArray[j];
        theArray[j] = theArray[j + 1];
        theArray[j + 1] = temporal;
      }
      console.log(theArray);
    }
  }
}
bubleSort(myArray);
