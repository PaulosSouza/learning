// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized

export function capitalizeWords(input: string[]): string[] {
  let result = [] as string[];

  if (!input.length) return [];

  const firstElement = input[0].toUpperCase();
  result.push(firstElement);

  result = result.concat(capitalizeWords(input.splice(1)));

  return result;
}
