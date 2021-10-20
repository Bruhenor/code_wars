/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

/*
Pszeudokód

1.) FOR loop-al az array vizsgálta.
2.) Ha az array elemienek száma nagyobb, mint 0 akkor összegezze őket.
3.) Csak pozitiv számokat össuegezzen!
4.)

*/


function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}

const test1 = positiveSum([1,-4,7,12]);
console.log(test1);