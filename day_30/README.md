# Notes

## Arrow Functions

```js
const playThe = (funky) => {
  return funky + " music";
};

const playThe = (funky) => {
  return funky + " music";
};

const playThe = (funky) => funky + " music";

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

- the click on the button fires first
- followed by the click on its parent (the <div> element)
- followed by the <div> element's parent (the <body> element).

We describe this by saying that the event bubbles up from the innermost element that was clicked.

### stopPropagation()

event bubbling can sometimes create problems, but there is a way to prevent it. The Event object has a function available on it called stopPropagation() which, when called inside an event handler, prevents the event from bubbling up to any other elements

### event capture

An alternative form of event propagation is event capture. This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the capture option in addEventListener().

### Event Delegation

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```
Now in JavaScript, we could add a click event handler for every tile. But a much simpler and more efficient option is to set the click event handler on the parent, and rely on event bubbling to ensure that the handler is executed when the user clicks on a tile:
```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```
**Note**: In this example, we're using event.target to get the element that was the target of the event (that is, the innermost element). If we wanted to access the element that handled this event (in this case the container) we could use event.currentTarget.
