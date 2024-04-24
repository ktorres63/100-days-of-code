const fibonacci = function (str) {
  let num = parseInt(str);
  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  } else {
    let fib = [1, 1];
    for (let i = 2; i < num + 2; i++) {
      fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[num - 1]; //[1, 1, 2, 3, 5, 8]
  }
};

// Do not edit below this line
module.exports = fibonacci;
