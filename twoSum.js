//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
    let complements={};
    let result=[];
    
    for (let i=0; i< nums.length; i++) {
      if (complements.hasOwnProperty(nums[i])) {
        result[0] = complements[nums[i]];
        result[1] = i;
        return result;
      }
      complements[target - nums[i]] = i;
    }
  }
