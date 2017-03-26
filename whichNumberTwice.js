/*
 * I have an array where every number in the range 1..n appears once except for one number which appears twice.
 * Write a function for finding the number that appears twice.
 */

//[1,1,2,3,4,5]

const whichNumberTwice = (arr) => {
  let n = arr.length;
  let sum = 0;
  arr.forEach(function(element) {
    sum += element;
  });
  //closed form sum to find target value
  let target = n * (n+1)/2;
  return target-sum;
}
