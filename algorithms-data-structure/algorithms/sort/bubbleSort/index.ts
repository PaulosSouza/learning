function swap(arr: number[], xp: number, yp: number) {
  const temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

export function bubbleSort(arr: number[]): void {
  let i: number, j: number;
  const arrLength = arr.length;

  for (i = 0; i <= arrLength - 1; i++) {
    for (j = 0; j < arrLength - i - 1; j++) {
      const firstElem = arr[j];
      const secondElem = arr[j + 1];

      if (firstElem > secondElem) {
        swap(arr, j, j + 1);
      }
    }
  }
}

export function bubbleSortOptimazed(arr: number[]): void {
  let i: number, j: number, temp: number;
  let swapped: boolean;

  const length = arr.length;

  for (i = 0; i < length - 1; i++) {
    swapped = false;

    for (j = 0; j < length - i - 1; j++) {
      const firstElem = arr[j];
      const secondElem = arr[j + 1];

      if (firstElem > secondElem) {
        temp = firstElem;
        arr[j] = secondElem;
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }
}

export function printArray(arr: number[]) {
  arr.forEach((num) => console.log(num));
}

// const arrayOfNumbers = [64, 34, 25, 12, 22, 11, 90];
// bubbleSortOptimazed(arrayOfNumbers);
// printArray(arrayOfNumbers);
