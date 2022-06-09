# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
    array = Array.new
    nums.each do |num|
        if num.to_s.length().even?
            array.push(1)
        end
    end
    return array.length
end