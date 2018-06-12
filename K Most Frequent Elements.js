/* Given an array of elements and num k, return the k most frequent elements found 
Input: [1,6,2,1,6,1,6], k=2
Output: [1,6]
*/

//Method 1:
//Iterate over array and store frequencies in object
//Create a bucket array where indices represent frequencies and each bucket contains the elements that pertain to those frequencies
//Depending on k, find elements of bucket array that are not null starting from the end of the bucket array
//For each bucket found, merge them all together into a results array

//Method 2:
//Iterate over array and store frequencies in object
//Push [key, value] from object into new array
//Sort array based on frequency 
//Starting frmo the end of this array, push each element into result array
