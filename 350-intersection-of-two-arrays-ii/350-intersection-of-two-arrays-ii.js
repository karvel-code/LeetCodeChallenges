/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = {}
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        if (!hash[nums1[i]]) {
            hash[nums1[i]] = 1
        } else {
            hash[nums1[i]]++
        }
    }
    
    for (let j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]] > 0) {
            arr.push(nums2[j])
            hash[nums2[j]]--
        }
    }
    
    console.log(hash)
    return arr
};