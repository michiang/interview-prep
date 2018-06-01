/**
 * @param {number[]} nums
 * @return {number}
 */
 
   //Time is O(N) or O(4N) with 4 for loops.
  //1st loop will find the min or the left side value of where the order isn't ascending.
  //2nd loop will find the max or the right side value of where the order isn't ascending.
  //3rd loop will loop over to find the iteration where the min value occurs.
  //4th loop will loop over to find the iteration where the max value occurs.
  //The answer is iteration of max value minus the iteration of left + 1.

var findUnsortedSubarray = function(nums) {
    var min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER, marker = false;


    for (var i = 1; i < nums.length; i++){
        if (nums[i] < nums[i-1]) {             //checks if a number isn't ascending
            marker = true;
        }
        if (marker) {
            min = Math.min(min,nums[i]);
        }
    }
    marker =  false;
    for (i = nums.length-2; i >= 0; i--){
        if (nums[i] > nums[i+1]){              //checks if a number isn't ascending
            marker = true;
        }
        if (marker){
            max = Math.max(max,nums[i]);
        }
    }
    var l, r;
    for (l = 0; l < nums.length; l++){
        if (min < nums[l]){
            break;
        }
    }
    for (r = nums.length-1; r >= 0; r--){
        if (max > nums[r]){
            break;
        }
    }
    return r-1 < 0 ? 0 : r-l+1;
};

var findUnsortedSubarray = function(nums) {
    //I: Array of integers
    //O: Length of shortest subarray of original array to sort entire original array
    //C: O(n)
    //E: Empty array
    let result;
    let startIndex;
    let endIndex;

    for (let i = 0, j = nums.length-1; i < nums.length; i++, j--) {
      if (nums[i] > nums[i+1]) {
        startIndex = i;
      } 
      if (nums[j] < nums[j-1]) {
        endIndex = j;
      }

      // console.log('startIndex', startIndex);
      // console.log('endIndex', endIndex);

      if (startIndex && endIndex) {
        result = endIndex - startIndex;
        return result+1;
      }
    }

    //[2, 6, 4, 8, 10, 9, 15]
    //[2, 4, 6, 8, 9, 10, 15]
    //Sort original array in ascending order and run a comparison between the original array and the sorted array to see if there are any similar placements
    //If element is in correct placement, then move on to next element
    //If element is not in correct placement, start tracking
        //If series is contiguous, push element to subArray
};

findUnsortedSubarray([4, 2, 6, 8, 10, 9, 15]);
