/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let windowStart = 0
    let soFar = {}
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd]
        soFar[rightChar] = soFar[rightChar] + 1 || 1
        
        while(soFar[rightChar] > 1) {
            let leftChar = s[windowStart]
            
            if(soFar[leftChar] > 1) {
                soFar[leftChar]--
            } else {
                delete soFar[leftChar]
            }
            windowStart++
        }
        max = Math.max(max, (windowEnd - windowStart) + 1)
    }
    return max;
};