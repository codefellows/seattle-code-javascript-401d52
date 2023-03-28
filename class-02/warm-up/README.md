# Warm Up

The **shredder** library ($$)

## `$$.map()` method

Takes 2 arguments: An array or object and a callback.

Returns a new structure matching the old, based on the return value of the callback.

For Arrays, the input should be an array and a callback that receives `value` and `index` as parameters.

- Return a new array, filled with the return value of running that callback on each element

```javascript
let array = [1,2,3,4];
$$.map(array, (val,idx) => {
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

$$.map(obj, (key, val) => {
  return val.toUpperCase;
})

// { hot: "YES", sunny: "NO" }
```
