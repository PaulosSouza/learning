export function jumpSearch(arr: number[], item: number): number {
  const length = arr.length;
  let step = Math.sqrt(length);

  let prev = 0;
  while (arr[Math.min(step, length) - 1] < item) {
    prev = step;
    step += Math.sqrt(length);
    if (prev >= length) return -1;
  }

  while (arr[prev] < item) {
    prev++;

    if (prev === Math.min(step, length)) {
      return -1;
    }
  }

  if (arr[prev] === item) return prev;

  return -1;
}

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const x = 55;

const index = jumpSearch(arr, x);

// console.log(index);
