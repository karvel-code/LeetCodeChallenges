/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let sArr = [...s]
    let tArr = [...t]
    
    
    for (let i = 0; i < sArr.length; i++) {
        if(tArr.indexOf(sArr[i]) === -1) {
            return false
        } else {
            tArr.splice(tArr.indexOf(sArr[i]), 1)
        }
    }
    return true;
    
};