// Recursive function to sort an
// array using insertion sort
export function insertionSortRecursive(arr: number[], length: number): void {
  // Base case
  if (length <= 1) {
    return;
  }

  // Sort first n - 1 elements
  insertionSortRecursive(arr, length - 1);

  // Insert last element at its
  // correct position in sorted array
  const last = arr[length - 1];
  let j = length - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j -= 1;
  }

  arr[j + 1] = last;
}

// const arrNumbers = [12, 11, 13, 5, 6];
// insertionSortRecursive(arrNumbers, arrNumbers.length);

// console.table(arrNumbers);
