/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let uniq_arr = Array.from(new Set(nums))
    //  if (uniq_arr.length !== nums.length) {
    //      return true
    //  } else {
    //      return false
    //  }
    
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] += 1
        }
    }
    
    return Object.keys(hash).length === nums.length ? false : true
};