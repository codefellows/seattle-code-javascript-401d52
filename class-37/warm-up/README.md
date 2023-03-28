# Warm Up - Ajax with Shredder

Ajax has been a part of Javascript for many years. jQuery has made it pretty easy to use what is actually a pretty complicated process.

## Overview

[XMLHttpRequest / MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

Here's a simple, happy path example:

```javascript
const request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState === 4) {
    if(request.status === 200) {
      console.log(request.responseText);
    } else {
      console.error('An error occurred during your request: ' +  request.status + ' ' + request.statusText);
    }
  }
}

request.open('get', 'https://pokeapi.co/api/v2/pokemon');
request.send();
```

## Challenge 1

Create a "get" function for shredder - `$$.get(url)` that uses the built-in ajax functionality as shown above to fetch API content for any URL

- Do not use `superagent()` or `fetch()` ... write it from scratch
- Implement this as a promise
- NOTE: This is for use in the browser, not on the server

```javascript
  $$.get('https://pokeapi.co/api/v2/pokemon')
    .then( data => {
      console.log(data);
    })
    .catch( e => console.error(e));
```

## Challenge 2

- Once you have `$$.get()` working, add support for the other REST methods:
  - `$$.post(url, data)`
  - `$$.put(url, data)`
  - `$$.delete(url)`

## Congratulations

> ... you've written a browser version of `superagent`
