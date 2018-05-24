function shuffleDeck(deckParam) { 
  let retArray = [];
  for (let i = 0; i < deckParam.length/2; i++) { 
    retArray.push(deckParam[i]); 
    retArray.push(deckParam[i+(deckParam.length/2)]);
  }
  return retArray;
}

shuffleDeck(['a','b','c','d',1,2,3,4]);
