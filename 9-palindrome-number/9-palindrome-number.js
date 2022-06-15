/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let strg = x.toString()
    let reverse_strg = [...strg].reverse().join("")
    if (strg === reverse_strg) {
        return true;
    } else {
        return false;
    }
};