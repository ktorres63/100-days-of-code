/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

function camelize(str) {
  let strArr = str.split("-");
  let newArr = [strArr[0]]

  for (let i = 1; i < strArr.length; i++) {
    let upper = strArr[i].at(0).toUpperCase();
    let newText = strArr[i].replace(strArr[i].at(0),upper)
    newArr.push(newText)
  }

  return newArr.join("");
}
 
console.log(camelize("background-color")) // 'backgroundColor'
console.log(camelize("list-style-image")) // 'listStyleImage';
console.log(camelize("-webkit-transition")) // 'WebkitTransition';