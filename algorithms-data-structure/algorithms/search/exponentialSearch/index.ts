export function binarySearch(
  arr: number[],
  left: number,
  right: number,
  x: number
): number {
  if (right >= left) {
    const mid = left + (right - left) / 2;

    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] > x) {
      return binarySearch(arr, left, mid - 1, x);
    }

    return binarySearch(arr, mid + 1, right, x);
  }

  return -1;
}

export function exponentialSearch(
  arr: number[],
  length: number,
  x: number
): number {
  if (arr[0] === x) return 0;

  let i = 1;
  while (i < length && arr[i] <= x) {
    i = i * 2;
  }

  return binarySearch(arr, i / 2, Math.min(i, length - 1), x);
}

// const arr = [2, 3, 4, 10, 40];
// const length = arr.length;
// const x = 10;
// const result = exponentialSearch(arr, length, x);
//
// console.log(result);
