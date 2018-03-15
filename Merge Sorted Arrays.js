function mergeArrays(myArray, alicesArray) {

// set up our mergedArray
var mergedArray = [];

var currentIndexAlices = 0;
var currentIndexMine   = 0;
var currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

      var isMyArrayExhausted = currentIndexMine >= myArray.length;
      var isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

      // case: next comes from my array
      // my array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) the current element in my array is less
      //    than the current element in Alice's array
      if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
              (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

          mergedArray[currentIndexMerged] = myArray[currentIndexMine];
          currentIndexMine++;

      // case: next comes from Alice's array
      } else {
          mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
          currentIndexAlices++;
      }

      currentIndexMerged++;
  }
  return mergedArray;
}
