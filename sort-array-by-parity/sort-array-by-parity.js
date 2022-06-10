/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while (leftIndex < rightIndex) {
        
        while (nums[leftIndex] % 2 === 0 && leftIndex < rightIndex) {
            leftIndex += 1
        }
        
        while (nums[rightIndex] % 2 !== 0 && leftIndex < rightIndex) {
            rightIndex -= 1
        }
        
        if (leftIndex < rightIndex) {
            const temp = nums[leftIndex]
            nums[leftIndex] = nums[rightIndex]
            nums[rightIndex] = temp
            leftIndex += 1
            rightIndex -= 1
        }
    }
    return nums
};