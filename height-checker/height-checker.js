/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let counter = 0; // counter to store the value of displaced elements in the array after comparing both arrays
    
     const sorted_heights =  Array.from(heights).sort((a, b) => a - b); // we sort the array here
    
    // const sorted_heights = heights.sort(function(a, b){return a - b}) // why is this not working???
    
    for (i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted_heights[i]) { // we compare each of the values of the arrays.
            counter += 1 //if the values do not match at their specific indexes, we add to the counter to store the values of the displaced elements in the heights array
            console.log(counter)
        }
    }
    // console.log(counter)
    return counter
};