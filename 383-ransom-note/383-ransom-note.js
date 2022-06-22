/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let a = [...ransomNote].sort()
    let b = [...magazine].sort()
    // if (ransomNote.includes(magazine)) {
    //     return true
    // } else {
    //     return false
    // }
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            return false
        } else {
            b.splice(b.indexOf(a[i]), 1)
        }
    } 
    return true
};