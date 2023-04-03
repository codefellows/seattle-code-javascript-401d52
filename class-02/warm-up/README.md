# Warm Up

Extending the `Array.prototype.map` function.

## `map()` with Arrays and Objects

This function will implement the same functionality as `Array.prototype.map`, but be usable for both Array and Object data structures.

Our function will define 2 parameters:

- `data` - Array or object containing any type and number of values.
- `cb` - Function to be called on every item in the `arr` array.

The return value is new structure that is the same type as `data`, each value in the new structure is the return value of the callback.

For Arrays, the input should be an array and a callback that receives `value` and `index` as parameters.

- Return a new array, filled with the return value of running that callback on each element

```javascript
let array = [1,2,3,4];

let newArray = map(array, (val,idx) => {
  return val * val;
});

// [1,4,9,16]
```

For Objects, the input should be an object and a callback that receives `key` and `value` as parameters.

- Return a new object with the same keys, with the values having been set by running that callback on each value.

```javascript
let obj = {
  hot: "yes",
  sunny: "no",
};

let newObj = map(obj, (key, val) => {
  return val.toUpperCase();
})

// { hot: "YES", sunny: "NO" }
```
