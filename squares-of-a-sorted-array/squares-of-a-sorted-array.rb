# @param {Integer[]} nums
# @return {Integer[]}
def sorted_squares(nums)
    sq_arr = Array.new
    nums.each do |num|
        num_2 = num * num
        sq_arr.push(num_2)
    end
    return sq_arr.sort
end