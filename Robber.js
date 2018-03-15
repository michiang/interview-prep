/*You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.*/

/*The key here is understanding that the result that we return is the max amount you can rob from an entire sequence of households w/o getting caught, so the amounts that we store are cumulative.
With that said, this problem is an example of dynamic programming since we need to keep track of a calculated/cumulative amnount as we iterate over each household and to do so, we can use previously stored
amounts to finish the total amounts*/
/*It doesn't matter if the input array of household amounts is sorted in any way or not - since we keep track of cumulative sums and are only concerned
with the largest sums/amounts, the last element of the results array should always be the largest possible sum that can be robbed in the string of houses*/

let rob = function(nums) {
    let result = [];
    if (nums.length === 0) {
      return 0;
    }
    if (nums.length === 1) {
      return nums[0];
    }
    if (nums.length === 2) { 
      return Math.max(nums[1],nums[0]);
    }

    result.push(nums[0]);
    result.push(Math.max(nums[0],nums[1]));

    for(let i = 2 ; i < nums.length ; i++){
        result[i] =  Math.max(nums[i] + result[i-2] , result[i-1]);;
    }
    
    return result.pop();
};
