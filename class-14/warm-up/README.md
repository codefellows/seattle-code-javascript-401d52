# Warm Up - Shredder Event Listeners

Now that we can find DOM elements, add event listeners so that we can respond to users intent

## Challenge: Event Listeners

Given an element that the `$$()` has found, add event listeners to it for any valid DOM event, such as 'click', 'mouseover', etc.

- Add an `on` prototype methods to your `DOMList` constructor
  - Accepts 2 parameters
    - The `event` name to listen for
    - The `callback` to run
  - When running the callback, always send the `$$(element)` so that the callback can reference the element that the event is running on.

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>$$</title>
  </head>
  <body>
    <button>Test Button 1</button>
    <button>Test Button 2</button>
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
let buttons = $$('button');

paragraph.on('mouseover', (element) => {
  console.log('Get off my lawn!');
})

buttons.on('click', (element) => {
  console.log('Clicked on the button:', element.text())
})

```

Output

```bash
Get off my lawn!
Get off my lawn!
Get off my lawn!
Get off my lawn!
Clicked on the button: Test Button 1
Clicked on the button: Test Button 2
```
