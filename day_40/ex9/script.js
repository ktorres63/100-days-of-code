/*Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:
*/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let arr = [1, 2, 3];

shuffle(arr)
console.log(arr);
// arr = [3, 2, 1]
shuffle(arr)

console.log(arr);
// arr = [2, 1, 3]
shuffle(arr)
console.log(arr);
// arr = [3, 1, 2]
// ...

//USING Fisher–Yates shuffle
