/*

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

*/

/*
Pszeudokód

1.) Invert létrehozása,FOR loop-al az array vizsgálata
2.) Invert-push-al a szám ellentejének hozzáadása.
3.) Abszolut érték vizsgálata.

*/

function invert(array) {
  let invert = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      invert.push(array[i] - array[i] * 2);
    } else if (array[i] < 0) {
      invert.push(Math.abs(array[i]));
    }
  }
  return invert;
}

const test1 = invert([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]);
console.log(test1);
