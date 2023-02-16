# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    
    # pointers for iterating through the array
    left = 0
    right = nums.length - 1
    
    while left <= right
        mid = (left + right) / 2
        if nums[mid] == target
            return mid
        elsif nums[mid] > target
            right = mid -1
        elsif nums[mid] < target
            left = mid + 1
            
        end
    end
    return -1
    
end