// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
//  * Create a pointer in the middle
//  * If you find the value you want, return the index
//  * If the value is too small, move the left pointer up
//  * If the value is too large, move the right pointer down

export function binarySearch(input: number[], wantTo: number): number {
  let pointerLeft = 0;
  let pointerRight = input.length - 1;
  let valueFounded = Number.MAX_VALUE;
  let moviments = 0;

  while (valueFounded !== -1) {
    moviments++;

    const middlePointer = Math.ceil((pointerLeft + pointerRight) / 2);

    const value = input[middlePointer];

    if (value === wantTo) {
      valueFounded = middlePointer;
      return valueFounded;
    }

    if (wantTo < value) pointerRight = middlePointer;

    if (wantTo > value) pointerLeft = middlePointer;

    if (
      pointerLeft === 0 &&
      pointerRight === 1 &&
      valueFounded === Number.MAX_VALUE
    )
      break;
  }

  console.log(`Total of moviments was ${moviments}`);
  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5], 2);
console.log(`The result is ${result}`);
