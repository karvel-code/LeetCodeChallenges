/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // loop through the main sudoku box
    for (let i = 0; i < board.length; i++) {
        const set = new Set()
        //loop through the cells in rows
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j] // target the cells in the rows
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell);
        }
        
    }
    
        // loop through the main sudoku box
    for (let i = 0; i < board.length; i++) {
        const set = new Set()
        //loop through the cells in columns
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[j][i] // target the cells in the rows
            if (cell === '.') continue;
            if (set.has(cell)) return false;
            set.add(cell);
        }
        
    }
    
    //loop through the main sudoku box
    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board[i].length; j+=3) {
            const set = new Set()
            for (let k = i; k < i+3; k++) {
                for (let l = j; l < j+3; l++) {
                    const cell = board[k][l] //target the cell in the grid
                    if (cell == '.') continue;
                    if (set.has(cell)) return false;
                    set.add(cell);
                }
            }
        }
    }
    return true;   
};