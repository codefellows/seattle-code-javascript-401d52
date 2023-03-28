# Warm Up - jQuery Clone

Let's extend the `$$` library to mimic some of the core functionality of jQuery

## Challenge: Selectors

Extend the `$$` library to export a function that can accept any valid CSS selector and return a list of DOM elements that we can attach prototype methods do.

- Export a function that can accept either a valid CSS selector or a previously discovered DOM Node
- Create an array of DOM Nodes, using Vanilla Javascript
  - If the input to your function is a string (a CSS Selector), use a built-in method to find all matching DOM nodes
  - Otherwise, assume this is either a single element or a list of elements your function had previously found (like `$(this)` from jQuery)
- Return an instance of a new class that you create, which contains the list of nodes as a property called `nodes`.
- We should be able to log the nodes list as a whole, or iterate them independently

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>$$</title>
  </head>
  <body>
    <div>
      <button>One</button>
      <button>Two</button>
      <button>Three</button>
      <button>Four</button>
      <button>Five</button>
    </div>
    <script src="shredder.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

JavaScript (app.js)

```javascript
// Show all the buttons
let buttons = $$('button');
console.log('All Buttons', buttons);

// Show each button independently
buttons.nodes.forEach( button => {
  console.log('BUTTON:', $$(button) );
});
```

Output

```bash
All Buttons
DOMList {
  nodes:
   NodeList {
     0: HTMLButtonElement {},
     1: HTMLButtonElement {},
     2: HTMLButtonElement {},
     3: HTMLButtonElement {},
     4: HTMLButtonElement {}
  }
}

BUTTON: DOMList { nodes: [ HTMLButtonElement {} ] }
BUTTON: DOMList { nodes: [ HTMLButtonElement {} ] }
BUTTON: DOMList { nodes: [ HTMLButtonElement {} ] }
BUTTON: DOMList { nodes: [ HTMLButtonElement {} ] }
BUTTON: DOMList { nodes: [ HTMLButtonElement {} ] }
```
