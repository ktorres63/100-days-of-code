/*
We have an array of strings arr. We’d like to have a sorted copy of it,
 but keep arr unmodified.Create a function copySorted(arr) 
 that returns such a copy.

 */
function copySorted(arr){
  let newArr = [...arr];
  return newArr.sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

/*SOLUTION
We can use slice() to make a copy and run the sort on it:

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );
*/