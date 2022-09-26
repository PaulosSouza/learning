function swap(arr: number[], xp: number, yp: number) {
  const temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

export function selectionSort(arr: number[], length: number) {
  let i: number, j: number, minIdx: number;

  for (i = 0; i < length - 1; i++) {
    minIdx = i;

    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    swap(arr, minIdx, i);
  }
}

export function printArray(arr: number[]) {
  arr.forEach((num) => console.log(num));
}

// const unsortedArray = [64, 25, 12, 22, 11];
// const n = unsortedArray.length;
// selectionSort(unsortedArray, n);
// printArray(unsortedArray);
