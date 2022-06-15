/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniq_arr = Array.from(new Set(nums))
     if (uniq_arr.length !== nums.length) {
         return true
     } else {
         return false
     }
};