// Write a recursive function called nestedEvenSum. Return the sum of all even
// numbers in an object which may contain nested objects

export function nestedEvenSum(input: object): number {
  const values = Object.values(input);

  let result = 0;

  for (let index = 0; index < values.length; index++) {
    const element = values[index];

    let returned = 0;

    switch (typeof element) {
      case "object":
        returned = nestedEvenSum(element);
        break;
      case "number":
        returned = element;
    }

    if (returned % 2 === 0) result += returned;
  }

  return result;
}

// const obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// const obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// nestedEvenSum(obj1);
// nestedEvenSum(obj2);
