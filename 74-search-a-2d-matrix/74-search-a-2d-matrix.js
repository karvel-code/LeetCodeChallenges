/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        // const set = new Set()
        for (let j = 0; j < matrix[i].length; j++) {
            let cell = matrix[i][j]
            // set.add(cell)
            // if (set.has(target)) return true;
            if (cell === target) return true;
            
        }
    }
    return false
};