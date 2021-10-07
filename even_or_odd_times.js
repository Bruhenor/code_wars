/*

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */



// const asd = (number % 2 == 0)? number*8 : number * 9  --> Matejcsok megoldás


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
