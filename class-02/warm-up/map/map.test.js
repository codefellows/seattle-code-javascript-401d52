'use strict';

const map = function (collection, cb) {

  if (Array.isArray(collection)) {
    // we know that our collection is an array, and we can create a new array
    let newArray = [];
    for (let i = 0; i < collection.length; i++) {
      newArray.push(cb(collection[i], i));
    }
    return newArray;
  } else {
    console.log('Or collection');
    let keysArrays = Object.keys(collection);
    let newObj = {};
    // for (let i =0; i < keysArrays.length; i++) {
    //   let key = keysArrays[i];
    //   let value = collection[key];
    //   newObj[key] = cb(key, value);
    //   return newObj;
    // }
    for (let key in collection) {
      newObj[key] = (cb(key, collection[key]));
    }
    return newObj;

  }

}

describe('Testing the map function', () => {

  test('Should multiply all numbers by themselves', () => {

    let array = [1, 2, 3, 4];

    let newArray = map(array, (val, idx) => {
      return val * val;
    });
    expect(newArray).toEqual([1, 4, 9, 16]);
  });

  test('Should capitalize all values in an object', () => {
    let obj = {
      hot: "yes",
      sunny: "no",
    };

    let newObj = map(obj, (key, val) => {
      return val.toUpperCase();
    });

    expect(newObj).toEqual({ hot: "YES", sunny: "NO" })
  });
})
