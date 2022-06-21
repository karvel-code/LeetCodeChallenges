/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let x = mat.length // length of the rows
    let y = mat[0].length // length of the colums or individual arrays
    
    if (x * y !== r * c) {
        return mat
    }
    
    let contArray = new Array();
    
    
    let bigCounter = 0
    let smallCounter = 0
    
    
    for (let i = 0; i < r; i++) {
        let subArray = new Array();
        for (let j = 0; j < c; j++) {
            subArray.push(mat[bigCounter][smallCounter])
            smallCounter++
            if (smallCounter === mat[0].length) {
                bigCounter++
                smallCounter = 0
            }
            
        }
        contArray.push(subArray)
    }
    
    return contArray

};