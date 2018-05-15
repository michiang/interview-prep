/**
Most positive numbers can be written as the sum of a sequence of consecutive positive integers. For instance,

6 = 1 + 2 + 3 
9 = 4 + 5 = 2 + 3 + 4

but there is no such sequence for 8.

Write a function that takes in a number and prints out all the possible consecutive sequences that add up to it.  If there are no such sequences, print an error message.
*/

//O: Sequence of integers
//I: Positive integer
//C: N/A
//E: None 

//Iterate up to the positive integer that's given
  //Keep track of the total
  //During every iteration, we want to compare the integers that are being added to our total
  //If our total is less than the integer input, then keep looking at the next integer in the sequence
  //If our total is greater than the integer input, then break out of the current iteration and move on to the next number in the sequence
  //If our total is equal to the integer input, then return that sequence

  //If there are no sequences, then console.log no sequences
function sumOfConsecutivePositiveIntegers(input) {
  //Total number of sequences to return
  let sequences = [];
  //Iterate up to input integer
  for (let i = 1; i < input; i++) {
    //Track current sequence
    let currentSequence = [];
    //Set sum to 0 since we're starting from 1
    let sum = 0;
    //Iterate up to input to figure out if current sequence is a valid sequence
    for (let j = i; j < input; j++) {
      //Add each integer to sum
      sum += j;
      //Push the integer to the current sequence
      currentSequence.push(j);
      //If sum is greater than input, then break
      if (sum > input) {
        break;
        //If sum is equal to input, return current sequence
      } else if (sum === input) {
        sequences.push(currentSequence);
        break;
      }
      //Assume that if sum is less than input, we keep iterating for the current sequence
      //We only push sequence if sum === input, so if it's under or over, we won't see that sequence in our result
    }
  }
  if (sequences.length === 0) {
    console.log('Error! No sequences!');
  } else {
    console.log(sequences);
  }
}

find(9);

sumOfConsecutivePositiveIntegers(6);
