# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
      # Initialize variables for left and right indices
        start, finish = -1, -1
      # Perform binary search for leftmost index of target
        left = 0
        right = nums.length - 1
        while left <= right
            mid = (left + right) / 2
            if nums[mid] >= target
                right = mid - 1
            else
                left = mid + 1
            end
        end
      # Check if leftmost target index was found
        if left <= nums.length && nums[left] == target
            start = left
        else
            return [start, finish]
        end
      # Perform binary search for rightmost index of target
    left = start
    right = nums.length - 1
    while left <= right
        mid = (left + right) / 2
        if nums[mid] <= target
            left = mid + 1
        else
            right = mid - 1
        end
    end
      # Update right index with rightmost target index, and return [left, right]
        finish = right
        return [start, finish]

   
    # [1, 2, 3, 4, 5, 5, 6, 7]
    
end