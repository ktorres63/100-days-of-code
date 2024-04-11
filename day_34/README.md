# Objects

## Computer properties

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```
## Property existence test, "in" operator

```js
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

Note that js shows the elemts order
```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
```
## Map

map is one such function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”.

Without MAP
```js
function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

```
With MAP
```js
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
```
## Filter
filter is somewhat similar to map. It still iterates through the array and applies the callback function on every item. However, instead of transforming the values in the array, it returns the original values of the array, but only IF the callback function returns true. Let’s say we had a function. The filter method expects the callback to return either true or false. If it returns true, the value is included in the output. Otherwise, it isn’t.
```js
const oddNums = arr.filter((num) => num % 2 !== 0);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected
```
## Reduce
Finally, let’s say that we wanted to multiply all of the numbers in our arr together like this: 1 * 2 * 3 * 4 * 5
* The callback function takes two arguments instead of one. The first argument is the accumulator, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. The second argument for the callback is the current value, which is the item currently being iterated on.
* It also takes in an initialValue as a second argument (after the callback), which helps when we don’t want our initial value to be the first element in the array. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.
```js
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
```


