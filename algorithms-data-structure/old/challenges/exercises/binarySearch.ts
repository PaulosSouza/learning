// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
//  * Create a pointer in the middle
//  * If you find the value you want, return the index
//  * If the value is too small, move the left pointer up
//  * If the value is too large, move the right pointer down

function getMiddle(firstElem: number, secondElem: number) {
  return Math.floor((firstElem + secondElem) / 2);
}

export function binarySearch(arr: number[], elem: number) {
  let start = 0;
  let end = arr.length - 1;
  let middle = getMiddle(start, end);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = getMiddle(start, end);
  }

  if (arr[middle] === elem) {
    return middle;
  }

  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 3);
