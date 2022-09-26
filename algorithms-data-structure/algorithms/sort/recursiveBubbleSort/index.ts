export function bubbleSort(arr: number[], length: number): void {
  if (length === 1) return;

  let count = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      count++;
    }
  }

  if (count === 0) {
    return;
  }

  bubbleSort(arr, length - 1);
}

// const arrNumbers = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(arrNumbers, arrNumbers.length);

// arrNumbers.forEach((number) => console.log(number));
