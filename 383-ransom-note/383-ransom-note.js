/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // let a = [...ransomNote].sort()
    let b = [...magazine].sort()
    // if (ransomNote.includes(magazine)) {
    //     return true
    // } else {
    //     return false
    // }
    for (let i = 0; i < ransomNote.length; i++) {
        if (b.indexOf(ransomNote[i]) === -1) {
            return false
        } else {
            b.splice(b.indexOf(ransomNote[i]), 1)
        }
    } 
    return true
};