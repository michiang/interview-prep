function electionWinner(votes) {
    const votesObj = {};
    let winners = [];
    let max = 0;
    
    for (let name of votes) {
        votesObj[name] = (votesObj[name] || 0) + 1;
    }
    
    console.log(votesObj);
    
    for (let [candidate, voteCount] of Object.entries(votesObj)) {
        if (voteCount > max) {
            max = voteCount;
            winners = [];
            winners.push(candidate);
        } else if (voteCount === max) {
            winners.push(candidate);
        }
    }
    
    if (winners.length === 1) {
        return winners[0];
    }
    
    winners.sort();
    return winners.pop();
}

