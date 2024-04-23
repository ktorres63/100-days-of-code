function getAverageAge(arr) {
  return (
    arr.reduce((total, usr) => {
      return total + usr.age;
    }, 0) / arr.length
  );
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
//SOLUTION
//Remember if you use {} you must to add return statement
/*
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/
