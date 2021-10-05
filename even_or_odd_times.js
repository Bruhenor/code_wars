// const asd = (number % 2 == 0)? number*8 : number * 9

function evenOrOdd(number) {
  let res;
  if (number % 2 == 0) {
    res = number * 8;
  } else {
    res = number * 9;
  }
  return res;
}

const test1 = evenOrOdd(22);

console.log(test1);
