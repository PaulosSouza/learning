// write a function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

export function capitalizeFirst(input: string[]): string[] {
  let result = [] as string[];

  if (!input.length) return result;

  const [word] = input;

  const capitalizedWord = `${word[0].toUpperCase()}${word.slice(1)}`;
  result.push(capitalizedWord);

  result = result.concat(capitalizeFirst(input.slice(1)));

  return result;
}
