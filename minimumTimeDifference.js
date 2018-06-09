/**
 * @param {string[]} timePoints
 * @return {number}
 */
//00:00 can take two values: 138060 or 000

var findMinDifference = function(timePoints) {
  //Find each time in total minutes
  timePoints = timePoints.map(time => {
    let arr = time.split(':');
    console.log(+arr[0] * 60 + (+arr[1]));
    return +arr[0] * 60 + (+arr[1]);
  });
  
  //Every time point has two different time values, so store both in overall array.
  timePoints = [...timePoints, ...timePoints.map(item => item + 60 * 24)];
  //Sort in ascending order
  timePoints.sort((a, b) => a - b);

  //Find minimum difference between all time points
  let minDifference = Infinity;
  for (let i = 1, len = timePoints.length; i < len; i++) {
    minDifference = Math.min(minDifference, timePoints[i] - timePoints[i - 1]);
  }
  return minDifference;
};

findMinDifference(["23:59","00:00"]);
