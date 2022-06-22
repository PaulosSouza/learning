// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome(reads the same forward and backward)
// Otherwise it returns false

export function isPalindrome(input: string): boolean {
  const arrInputReversed = [] as string[];

  function helperReverse(arr: string[]): void {
    if (!arr.length) return;

    const endArray = arr.length - 1;

    const letter = arr[endArray];

    arrInputReversed.push(letter);
    arr.splice(endArray);

    helperReverse(arr);
  }

  helperReverse(input.split(""));

  const inputReversed = arrInputReversed.join("");

  return input === inputReversed;
}
