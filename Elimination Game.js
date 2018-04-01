//There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

//Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

//We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

//Find the last number that remains starting with a list of length n.

/*
  Input:
  n = 9,
  1 2 3 4 5 6 7 8 9
  2 4 6 8
  2 6
  6
  
  Output:
  6
*/

let lastRemaining = function(n) {
  
  let arr = [];
  
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  
  arr.shift();
    
  while (arr.length > 1) {
    //Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
    let j = 0;
    while(j < arr.length) {
      arr.splice(j+1, 1);
      j++;
    }
   
    arr.splice(arr.length -1, 1);
    
    //Starting from right to left, remove the right most number and every other number from the remaining numbers.
    let k = arr.length - 1;
    while (k > 0) {
      arr.splice(k-1, 1);
      k--;
    }
  }
 
  return(arr[0]);

}

lastRemaining(9);
