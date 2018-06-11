/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a,b){return a-b});
    let result=[];
    helper(candidates,target,[],result,0);
    return result;
};

function helper(candidates, target, current, result, index) {
    let n;
    
    for (let i=index;i<candidates.length;i++) {
        n = candidates[i];
        current.push(n);
        //If current candidate is equal to the value of the target, then push to result
        if (n===target) {
            result.push(current.concat());
        //Else if target is larger than current candidate, recurse passing in complement of current candidate
        } else if(target>n) {
            console.log('new target: ', target-n);
            console.log('new current: ', current.concat());
            //[2,3,6,7] , 5, [2], [], 0
            //[2,3,6,7] , 3, [2,2], [], 0
            //[2,3,6,7] , 1, [2,2,2], [], 0
            helper(candidates, target-n, current.concat(),result, i);
        }
        //[2,3,6,7] , 1, [2,2,2,2], [], 0
        //[2,3,6,7], 
        console.log('target: ', target);
        console.log('before popping current: ', current);
        current.pop();
    }
}

combinationSum([2,3,6,7], 7);
