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
With JavaScript, you could easily add an event handler function to all the buttons on the page no matter how many there were, using something like this:

```js
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", bgChange);
}

```