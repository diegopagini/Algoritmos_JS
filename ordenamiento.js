// Bublle Sort

// Con CLases. de menor a mayor
class BubbleSort {
  constructor() {
    this.array = [8, 5, 6, 9, 22, 56, 4, 7, 9];
    this.buffer;
  }

  sort() {
    let swapped = false;
    for (let i = 0; i < this.array.length; i++) {
      swapped = false;
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.buffer = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = this.buffer;
          swapped = true;
        }
        // console.log(this.array);
      }
      if (swapped === false) {
        break;
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
  let swapped = false;
  //Hago dos bluces para que recorran todo el array y comparen
  for (let i = 0; i < theArray.length; i++) {
    swapped = false;
    for (let j = 0; j < theArray.length; j++) {
      //Si el primer item que estoy comparando es mayor al segundo: guardo en una variable temporal el primer valor, el primer valor lo guardo donde se econtraba el segundo y el segundo pasa a estar en el lugar de temporal.
      if (theArray[j] > theArray[j + 1]) {
        temporal = theArray[j];
        theArray[j] = theArray[j + 1];
        theArray[j + 1] = temporal;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
}
bubleSort(littleArray);
console.log(littleArray);
bubleSort(myArray);
console.log(myArray);

//Selection Sort
function selectionSort(arr) {
  let aux = 0;
  for (let i = 0; i < arr.length; i++) {
    let indMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indMin] > arr[j]) {
        indMin = j;
      }
    }
    aux = arr[i];
    arr[i] = arr[indMin];
    arr[indMin] = aux;
  }
}

selectionSort(myArray);
console.log("Selection Sort", myArray);
