'use strict';

const map = function () {}

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
