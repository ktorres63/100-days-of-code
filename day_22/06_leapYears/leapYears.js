const leapYears = function (year) {
  let resp = false;
  if((year % 4 == 0 & year % 100 != 0) || (year %400 == 0)){
    return true
  }
  return resp
};

// Do not edit below this line
module.exports = leapYears;
