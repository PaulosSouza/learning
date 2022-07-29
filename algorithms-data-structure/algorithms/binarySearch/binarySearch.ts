export function binarySearchRecurive(
  arr: number[],
  leftPointer: number,
  rightPointer: number,
  item: number
): number {
  if (rightPointer >= leftPointer) {
    const mid = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] > item) {
      return binarySearchRecurive(arr, leftPointer, mid - 1, item);
    }

    return binarySearchRecurive(arr, mid + 1, rightPointer, item);
  }

  return -1;
}

export function binarySearchInteractive(arr: number[], item: number): number {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let mid: number;

  while (rightPointer >= leftPointer) {
    // console.log(rightPointer, leftPointer);
    mid = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] > item) {
      rightPointer = mid - 1;
    } else {
      leftPointer = mid + 1;
    }
  }

  return -1;
}

const arr = [2, 3, 4, 10, 40];
const item = 10;

// const n = arr.length;
// const result = binarySearchRecurive(arr, 0, n - 1, item);

const result = binarySearchInteractive(arr, item);

// console.log(result);
