// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string

interface IObject {
  [key: string]: any;
}

export function collectStrings(input: IObject): string[] {
  let result = [] as string[];

  for (const key in input) {
    const elemValue = input[key];

    if (typeof elemValue === "string") {
      result.push(elemValue);
    }

    if (typeof elemValue === "object") {
      const returnedArray = collectStrings(elemValue);
      result = [...result, ...returnedArray];
    }
  }

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// console.log(collectStrings(obj));
