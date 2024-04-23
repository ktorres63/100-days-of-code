/*Write the function sortByAge(users) that gets an array of objects
 with the age property and sorts them by age.

For instance:*/

function sortByAge(arr){
  return arr.sort((a,b)=>{return a.age - b.age})

}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// // now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

console.log(arr)