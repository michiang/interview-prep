/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let result = [];
    let numberOfSmallerElements = 0;
    let i = 0;
    while (i < nums.length) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                numberOfSmallerElements++;
            }
        }
        result.push(numberOfSmallerElements);
        i++;
        numberOfSmallerElements = 0;
    }
    return result;
};
