# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    return 0 if nums.length == 0
    nums.each_with_index do |num, idx|
        if num == val
            nums[idx] = nil
        end
    end
    nums.compact!
    nums.length
end