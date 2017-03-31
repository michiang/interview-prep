/*
O: boolean
I: integer, array of integers
C: let's do linear
Possible solutions:
Just from intuition - O(n^2) with two for loops to compare each integer with each and every other integer
Let's make it a little faster - O(nlogn) binary search (assuming the array is sorted or can be sorted)
Linear - O(n) with two pointers (one at beginning of array and one at the end)

[1,2,3,4,5,6] sum = 9
i starts at 1, j starts at 6
if i + j is less than sum, increment i and recurse
if i + j is greater than sum, decrement j and recurse

Keep track of each number's complement and store into hash set so that it can be checked during every number iteration
*/

const inFlight = (movieLengths, flightLength) => {
    let movieLengthsSeen = new Set();
    for (let i = 0; i < movieLengths.length; i++) {
        let firstMovieLength = movieLengths[i];
        let matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
    }
    return false;
}
