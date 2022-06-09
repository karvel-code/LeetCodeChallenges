# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
    num_pop = nums1.size - m
    if num_pop > 0
        num_pop.times {
            nums1.pop()
        }
    end
    add_arr = nums2.first(n)
    add_arr.each do |arr|
        nums1.append(arr)
    end
    return nums1.sort!
end