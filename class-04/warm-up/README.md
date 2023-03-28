# Warm Up

The **shredder** library ($$)

## `$$.reduce()` method

Input: 3 arguments: An array or object, a callback and the initial value for the "accumulator".

Return: Based on the return value of the callback, a single accumulated data structure

For Arrays, the callback receives `accumulator`, `value` and `index` as parameters.

- Run the callback for each element in the array.
- Return the accumulator with each iteration as input to the next iteration.
- Return the accumulated value as the final return of the function

```javascript
let array = [1,2,3,4];
let sum = $$.reduce(array, (accumulator, val, idx) => {
  accumulator = accumulator + val;
  return accumulator;
}, 0);

// Output: 10
```

For Objects, the callback that receives `accumulator`, `key`, `value`, and `index` as parameters.

- Run the callback for each property in the object.
- Return the accumulator with each iteration as input to the next iteration.
- Return the accumulated value as the final return of the function.

```javascript
let weather = {
  hot: true,
  sunny: false,
  windy: true,
  morning: false,
  smoggy: true
};

let facts = $$.reduce( weather, (acc, key, value, idx) => {
  if( weather[key] === true ) {
    acc.push(key);
  }
  return acc;
}, []);

console.log(facts);

// ['hot', 'windy', 'smoggy']
```
