# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
    left = 0
    right = nums.length - 1
    return 0 if nums.length < 2
    
    while left < right do 
        mid = (left + right) / 2
        
        if nums[mid] > nums[mid + 1]
            right = mid
        else
            left = mid + 1
        end
    end
    left
end