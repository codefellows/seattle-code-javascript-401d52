# Warm Up - Ajax with Shredder (v2)

Now that you've gotten the individual REST methods implemented with Ajax using Shredder, it's time to optimize

## Overview

DRY up the `$$.get()`, `$$.post()`, `$$.put()`, and `$$.delete()` methods by making one method called `$$.ajax()` that can handle any of the methods

## Challenge

Create an "ajax" function for shredder - `$$.ajax(method, url, data)` that uses the built-in ajax functionality to fetch API content for any URL, using any of the ReST methods as specified.

- `$$.ajax()` should take 3 parameters
  - Method
  - URL
  - Data to send as the body of the request
- Implement this as a promise
- NOTE: This is for use in the browser, not on the server

```javascript
  $$.ajax('get', 'https://pokeapi.co/api/v2/pokemon')
    .then( data => {
      console.log(data);
    })
    .catch( e => console.error(e));
```
