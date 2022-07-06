/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(' ')
    let reverseWord = word.map(elem => elem.split("").reverse().join(""))
    // console.log(reverseWord.join(" "))
    return reverseWord.join(" ")
};