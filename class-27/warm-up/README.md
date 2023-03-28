# Warm Up - Object Test

Add a property to an object at any depth

## Overview

Very often, you'll need to see if an object has a certain property

Given:

```javascript
let person = {
  age: 50
}
```

`$$.set(person, 'hair.color', 'red')`

Should result in: 

```javascript
person: {
  age: 50,
  hair: {
    color: "red"
  }
}
```

## Challenge: `$$.set()`

Write a method in the Shredder library called `.has()` that takes an object, the dot notation representation of the target property within an object and the value to place there.  Return the updated object.
