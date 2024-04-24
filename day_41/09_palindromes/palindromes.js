function getCleanWord(str) {
  let cleanWord = "";
  for (e of str.toLowerCase()) {
    if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122 || e.charCodeAt(0)>= 48 && e.charCodeAt(0)<=57) {
      cleanWord += e;
    }
  }
  return cleanWord.split("");
}

const palindromes = function (str) {
  let word = getCleanWord(str);

  let size = word.length;
  let half = Math.floor(size / 2); //3
  let partA = word.slice(0, half).join("");
  let partB = word
  .slice(half + 1)
  .reverse()
  .join("");

  if (size % 2 == 0) 
    partB = word.slice(half).reverse().join("");
 
  return partA === partB;
};

// Do not edit below this line
module.exports = palindromes;
