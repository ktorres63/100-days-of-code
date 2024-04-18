# Array methods

## Concat
The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

```js
arr.concat(arg1, arg2...)
 ```

```js
 let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
 ```

 ## Iterate: forEach
 The arr.forEach method allows to run a function for every element of the array.

The syntax:
```js
arr.forEach(function(item, index, array) {
  // ... do something with item
}); ```

```js
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```
## Searching in Array

### indexOf/lastIndexOf and includes
The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

* arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
* arr.includes(item, from) – looks for item starting from index from, returns true if found.

Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.


```js

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
```
The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

```js

let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
```
The includes method handles NaN correctly
A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:
```js 
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
```
That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.