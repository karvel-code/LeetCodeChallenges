# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    return 0 if nums.length == 0
    nums.uniq!() #remove duplicate value using the uniq! method and store in the nums variable
    nums.compact! #remove the nil values from the nums array and still store the values in the nums variable still.
    nums.length #return the length of the modified nums array.
    
end