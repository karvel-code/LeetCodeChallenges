/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squareArray = new Array()
    let lowIdx = 0;
    let highIdx = nums.length - 1;
    let highSqrIdx = nums.length - 1;
    
    
    while(lowIdx <= highIdx) {
        let leftSquare = nums[lowIdx] * nums[lowIdx]
        let rightSquare = nums[highIdx] * nums[highIdx]
        
        if(leftSquare > rightSquare) {
            squareArray[highSqrIdx] = leftSquare
            highSqrIdx--
            lowIdx++
        } else {
            squareArray[highSqrIdx] = rightSquare
            highSqrIdx--
            highIdx--
        }
    }
    return squareArray
};