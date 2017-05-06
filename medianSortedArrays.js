//There are two sorted arrays nums1 and nums2 of size m and n respectively.

//Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sum = 0;
    let arr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    if (arr.length % 2 === 0) {
        let median = (arr[arr.length/2] + (arr[(arr.length/2) - 1]))/2;
        return median;
    } 
    else {
        let median = arr[Math.floor(arr.length/2)];
        return median;
    }
}
