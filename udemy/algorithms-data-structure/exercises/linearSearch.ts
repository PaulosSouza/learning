// write a function called linearSearch which accepts an array and a value,
// and returns the index at which the value exists. If the value does not exist
// in the array, return -1

export function linearSearch(input: number[], itemSearchable: number): number {
  for (let i = 0; i < input.length; i++) {
    const elem = input[i];

    if (elem === itemSearchable) return i;
  }
  return -1;
}

//const result = linearSearch([10, 15, 20, 25, 30], 60);
//console.log(result);
