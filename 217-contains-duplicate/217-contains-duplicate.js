/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let sorted_nums = nums.sort((a, b) => a - b)
    // console.log(sorted_nums)
    // let j = 1
    // for(let i = 0; i < sorted_nums.length; i++) {
    //     if(nums[j] === nums[i]) {
    //         return true;
    //         j += 1
    //     } else {
    //         return false;
    //     }
    // }
    let uniq_arr = Array.from(new Set(nums))
     if (uniq_arr.length !== nums.length) {
         return true
     } else {
         return false
     }
};