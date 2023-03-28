# Warm Up - Shredder Element Methods

Now that we can find DOM elements, let's manipulate their properties

## Challenge: Element Properties

Given an element that the `$$()` has found, change it's `html` or `text`

- Add prototype methods to your `DOMList` constructor that would allow the user to:
  - Get the text content from a node
  - Set the text content for a node
  - Get the html content from a node
  - Set the html content for a node
  - Set the css rules for a node

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>$$</title>
  </head>
  <body>
    <p>some words here</p>
    <script src="shredder.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

JavaScript (app.js)

```javascript
// Show all the buttons
let paragraph = $$('p');

console.log('Initial Text:', paragraph.text());
paragraph.text('new text');
console.log('Altered Text:', paragraph.text());

console.log('Current HTML', paragraph.html());
paragraph.html('<strong>Wow, this is cool</strong>')
console.log('Altered HTML', paragraph.html());
```

Output

```bash
Initial Text: some words here
Altered Text: new text
Current HTML new text
Altered HTML <strong>Wow, this is cool</strong>
```
