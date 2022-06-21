// Write a recursive function called reverse which
// accepts a string and returns a new string in reverse

export function reverse(input: string): string {
  const arrLength = [] as string[];

  function helperReverse(arr: string[]): void {
    if (!arr.length) return;

    const endArray = arr.length - 1;

    const letter = arr[endArray];

    arrLength.push(letter);
    arr.splice(endArray);

    helperReverse(arr);
  }

  helperReverse(input.split(""));

  return arrLength.join("");
}

console.log(reverse("awesome"));
