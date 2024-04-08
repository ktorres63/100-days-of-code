# Notes 

## Arrow Functions

```js
const playThe = (funky) => {
  return funky + " music";
}

const playThe = funky => {
  return funky + " music";
}

const playThe = funky => funky + " music";

// You can call all of these functions like: `playThe('blues')`
```
## Events
With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

```
### Event bubbling

Event bubbling describes how the browser handles events targeted at nested elements.

```html
<body>
  <div id="container">
    <button>Click me!</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

```
In this case:

* the click on the button fires first
* followed by the click on its parent (the <div> element)
* followed by the <div> element's parent (the <body> element).

We describe this by saying that the event bubbles up from the innermost element that was clicked.

### stopPropagation()

event bubbling can sometimes create problems, but there is a way to prevent it. The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements

### event capture
An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the capture option in addEventListener().