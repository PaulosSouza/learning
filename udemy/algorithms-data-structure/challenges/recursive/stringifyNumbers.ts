// Write a function called stringifyNumbers which takes in an object and finds all
// of the values are numbwers and converts them to strings.
// Recursion would be a great way to solve this!

interface IObject {
  [key: string]: any;
}

export function stringifyNumbers(input: IObject): IObject | undefined {
  const newObj = {} as IObject;

  for (const key in input) {
    const elemValue = input[key];

    switch (typeof elemValue) {
      case "object": {
        if (!Array.isArray(elemValue)) {
          const returnedObject = stringifyNumbers(elemValue);
          newObj[key] = returnedObject;
          break;
        }

        newObj[key] = elemValue;
        break;
      }

      case "number": {
        newObj[key] = String(elemValue);
        break;
      }

      default: {
        newObj[key] = elemValue;
        break;
      }
    }
  }

  return newObj;
}

// const obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));
