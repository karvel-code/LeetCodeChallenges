/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length === 1) {
        return [-1]
    }

    let maxsofar = -1;
    for (let i = arr.length -1 ; i >= 0; i-- ) {
        let valueToCompare= arr[i]; // we are storing the value of where we are at of the array
        arr[i] = maxsofar; // we are replacing the value with the maxsofar which is storing the highest no to the right if not -1
        if (valueToCompare > maxsofar) {
            maxsofar = valueToCompare
        } else if (valueToCompare < maxsofar) {
            maxsofar = maxsofar
        }
        
    }
    
    
    console.log(maxsofar)
    return arr
    
};