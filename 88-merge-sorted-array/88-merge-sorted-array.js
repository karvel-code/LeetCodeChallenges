/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m - 1
    let second = n - 1
    let i = m + n - 1
    
    for (let j = i; j >= 0; j--) {
        if (second < 0) {
            break;
        }
        
        if (nums1[first] > nums2[second]) {
            nums1[j] = nums1[first]
            first--
        } else {
            nums1[j] = nums2[second]
            second--
        }
    }
    
    
};