# Warm Up - Object Test

Does an object contain a value at some deeply nested property?

## Overview

Very often, you'll need to see if an object has a certain property

i.e. `if(person.name) { ... }`

If an object is undefined, or doesn't have a "deeply nested" property, you'll run into an error.

```javascript
let person = {
  age: 50,
  hair: false
}

if ( person.spouse.name ) { ... }

// ERROR: TypeError: Cannot read property 'name' of undefined
```

## Challenge: `$$.has()`

Write a method in the Shredder library called `.has()` that can find a property of an object and return a boolean if it is there. This does not make an assertion of the value itself, only the presence of the key in the object

```javascript
let person = {
  age: 50,
  hair: false
}

let hasSpouse = $$.has(person, 'spouse.name'); // false

let hasHair = $$.has(person, 'hair'); // true
```
