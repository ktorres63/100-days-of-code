const sumAll = function(a,b) {
  let start,end
  let result="ERROR";
if(typeof a == 'number' && typeof b == 'number'){
  if(a > 0 && b > 0 ){
    if(a < b){
      start = a;
      end = b;
    }
    else{
      start = b;
      end = a;
    }
    result = end*(end+1)/2;
  }
}
  return result;

};

// Do not edit below this line
module.exports = sumAll;
