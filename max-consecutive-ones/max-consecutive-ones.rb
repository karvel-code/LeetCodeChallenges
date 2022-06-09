# @param {Integer[]} nums
# @return {Integer}

def find_max_consecutive_ones(nums)
   nums.join("").split("0").map(&:size).max || 0
end