function missingWord(s, t) {
  let originalStringArray = s.split(' ');
  let subsequenceStringArray = t.split(' ');
  let result = [];
  
  for (let i=0, j=0; i < originalStringArray.length; i++) {
    if (originalStringArray[i] !== subsequenceStringArray[j]) {
      result.push(originalStringArray[i];
    } else {
      j++;
    }
  }
  
  return result;
}


missingWord('I like to code', 'like code');
