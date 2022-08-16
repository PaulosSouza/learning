export function fibMonaccianSearch(arr: number[], x: number, n: number) {
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;

  // fibM is going to store the smallest Fibonacci Number greater than or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  // While there are elements to be inspected. Note that
  // we compare arr[fibMm2] with x. When fibM becomes 1.
  // fibMm2 becomes 0
  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    const i = Math.min(offset + fibMMm2, n - 1);

    // If x is greater than the value at index fibMm2,
    // cut the subarray array from offset to i
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    }

    // If x is less than the value at index fibMm2,
    // cut the subarray after i + 1
    else if (arr[i] > x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    }
    // element found. return index
    else return i;
  }

  if (fibMMm1 && arr[n - 1] === x) {
    return n - 1;
  }

  return -1;
}

const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100, 235];
const length = arr.length;
const x = 80;
const indexFound = fibMonaccianSearch(arr, x, length);

console.log(indexFound);
