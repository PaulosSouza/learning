export function insertionSort(arr: number[]) {
  const arrLength = arr.length;

  let key = 0;
  let j = 0;

  for (let index = 0; index < arrLength; index++) {
    key = arr[index];
    j = index - 1;

    // Move elements of arr[0..i-1], that are
    // greater than key, to one position ahead
    // of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }
}

// const arrNumbers = [12, 11, 13, 5, 6];
// insertionSort(arrNumbers);

// console.table(arrNumbers);
