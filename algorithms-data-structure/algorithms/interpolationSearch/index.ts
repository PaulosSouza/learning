export function interpolationSearch(
  arr: number[],
  lo: number,
  hi: number,
  x: number
): number | undefined {
  let pos: number;

  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

    if (arr[pos] === x) return pos;

    if (arr[pos] < x) {
      return interpolationSearch(arr, pos + 1, hi, x);
    }

    if (arr[pos] > x) {
      return interpolationSearch(arr, lo, pos - 1, x);
    }
  }

  return -1;
}

// const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
//
// const n = arr.length;

// Element to be searched
// const x = 18;
// const index = interpolationSearch(arr, 0, n - 1, x);
// console.log(index);
