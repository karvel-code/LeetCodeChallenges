# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
  low = 0
  high = arr.size-1

  while(high-low>=k)
    if (arr[high]-x).abs >= (arr[low]-x).abs
      high -= 1
    else
      low += 1
    end
  end

  arr[low..high]
end