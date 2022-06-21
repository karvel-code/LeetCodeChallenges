/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let contArray = new Array(numRows);
    
    if (numRows === 1 ) {
        return [[1]];
    }
    
    for (let i = 0; i < numRows; i++) {
        let subArray = new Array(i + 1);
        subArray[0] = 1;
        subArray[subArray.length - 1] = 1;
        
        for (let j = 1; j < subArray.length - 1; j++) {
            let prevSubArray = contArray[i - 1]
            subArray[j] = prevSubArray[j] + prevSubArray[j - 1]    
        }
        contArray[i] = subArray;
        
    }
    return contArray
     
};