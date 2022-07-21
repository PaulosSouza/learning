// Write a function called someRecursive which accepts an array and a callback
// The function returns true if a single value in the array returns true when
// passed to the callback. Otherwise it returns false.

export function someRecursive(
  input: number[],
  cb: (val: number) => boolean
): boolean {
  if (!input.length) return false;

  const firstInput = input[0];

  const returnCb = cb(firstInput);
  if (returnCb) return true;

  const valueReturned = someRecursive(input.splice(1), cb);

  return valueReturned;
}
