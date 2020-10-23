// Bublle Sort

// Con CLases. de menor a mayor
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

// const bubble = new BubbleSort();
// bubble.sort();

// Sin clases con funciones de menor a mayor
const myArray = [8, 5, 6, 9, 22, 56, 4, 7, 9];
const littleArray = [2, 1, 3];
let temporal;

function bubleSort(theArray) {
  //Hago dos bluces para que recorran todo el array y comparen
  for (let i = 0; i < theArray.length; i++) {
    for (let j = 0; j < theArray.length; j++) {
      //Si el primer item que estoy comparando es mayor al segundo: guardo en una variable temporal el primer valor, el primer valor lo guardo donde se econtraba el segundo y el segundo pasa a estar en el lugar de tempora.
      if (theArray[j] > theArray[j + 1]) {
        temporal = theArray[j];
        console.log(
          "temporal",
          temporal,
          "thearray[j]",
          theArray[j],
          "thearray[j + 1]",
          theArray[j + 1]
        ); // En este momento temporal es = 2, theArray[j] = 2 y theArray[j + 1] = 1
        theArray[j] = theArray[j + 1];
        console.log(
          "temporal",
          temporal,
          "thearray[j]",
          theArray[j],
          "thearray[j + 1]",
          theArray[j + 1]
        ); // En este momento temporal es = 2, theArray[j] = 1 y theArray[j + 1] = 1
        theArray[j + 1] = temporal;
        console.log(
          "temporal",
          temporal,
          "thearray[j]",
          theArray[j],
          "thearray[j + 1]",
          theArray[j + 1]
        ); // En este momento temporal es = 2, theArray[j] = 2 y theArray[j + 1] = 2
      }
      console.log(theArray); // Queda ordenado como 1,2,3
    }
  }
}
bubleSort(littleArray);
