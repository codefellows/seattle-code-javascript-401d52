# Warm Up - Templating with Shredder

Many JavaScript libraries allow you to create templates with HTML and JavaScript values.  The goal being to merge data with a template containing tokens, and output markup.

## Challenge

Create a function for shredder called render - `$$.render(template, data, target)` that takes 3 parameters:

- template: The selector containing the html that has the template markup in it
- data: an object containing the data that you will merge with the template
- target: A selector identifying where you want your template output to be placed

Operation:

Your `$$.render()` function should do the following:

- Get the `innerHTML` of the element identified by `template` as a string
- Replace all instances of `{something}` with the value of `data.something`
- Append the resulting string to the element identified by `target`

### Example...

RAW HTML:

```html
<html>
  <head>
    <script id="people-template" type="x-tmpl-shredder">
      <li>{name} - {phone}</li>
    </script>
  </head>
  <body>
    <h1>My Friends</h1>
    <ul id="people"></ul>

    <script src="app.js"></script>
  </body>
</html>
```

Javascript

```javascript
let characters = [
  {name: "Fred", phone: "555-1212" },
  {name: "Wilma", phone: "555-2121" },
  {name: "Betty", phone: "555-1313" },
  {name: "Barney", phone: "555-3131" },
]

characters.forEach( character => {
  // render the people template with the character and append it to the people
  $$.render('#people-template', character, '#people');
});
```

OUTPUT:

```html
<html>
  <head>
    <script id="people-template" type="x-tmpl-shredder">
      <li>{name} - {phone}</li>
    </script>
  </head>
  <body>
    <h1>My Friends</h1>
    <ul id="people">
      <li>Fred - 555-1212</li>
      <li>Wilma - 555-2121</li>
      <li>Betty - 555-1313</li>
      <li>Barney - 555-3131</li>
    </ul>

    <script src="app.js"></script>
  </body>
</html>
```
