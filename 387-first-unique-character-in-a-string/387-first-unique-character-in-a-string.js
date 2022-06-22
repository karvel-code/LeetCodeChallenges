/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charArr = [...s] //convert string to an array
    let hash = {}
    for (let i = 0; i < charArr.length; i++) {
        if (!hash[charArr[i]]) {
            hash[charArr[i]] = 1
        } else {
            hash[charArr[i]] += 1
        }
    }
    let uniqueLetter = Object.keys(hash).find(key => hash[key] === 1);
    return charArr.indexOf(uniqueLetter)
};