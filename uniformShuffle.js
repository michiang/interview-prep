/*
 * Write a function for doing an in-place shuffle of an array.
 * The shuffle must be "uniform," meaning each item in the original 
 * array must have the same probability of ending up in each spot in the final array.
 */
 
const shuffle = (arr) => {
  /* pick a random element to go in the ith index from all (n-i) elements */
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let target = getRandom(i, len+1);
    let temp = arr[i];
    arr[i] = arr[target];
    arr[target] = temp;
  }
  return arr;
}

//shuffle helper function
function getRandom(floor, ceiling) {
	return Math.random() *(ceiling-floor) + floor;
}
