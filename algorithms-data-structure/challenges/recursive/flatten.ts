// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened

export function flatten(input: any[]): number[] {
  const result = [] as number[];

  function helperFlatten(val: any[]): void {
    if (Array.isArray(val) && !val.length) return;

    const firstItem = val[0];

    if (Array.isArray(firstItem)) {
      helperFlatten(firstItem);
    } else {
      result.push(firstItem);
    }

    val.shift();

    helperFlatten(val);
  }

  helperFlatten(input);

  return result;
}

//console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
