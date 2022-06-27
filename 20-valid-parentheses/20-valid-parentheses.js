/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {"(": ")", "[": "]", "{": "}"}
    const stack = []
    for (let ch of s) {
        if(obj[ch]) {
            stack.push(obj[ch])
        } else if(stack.length > 0 && stack[stack.length - 1] === ch) {
            // if ch is a closing bracket and the top of the stack matches
            stack.pop()
        } else {
            // if ch is a closing bracket and the top of the stack doesn't match
            return false
        }
    }
    return stack.length === 0
};