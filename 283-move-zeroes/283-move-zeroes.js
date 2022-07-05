/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer]
            writePointer++
        }
    }
    
    for (let i = writePointer; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

