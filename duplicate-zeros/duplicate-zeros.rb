# @param {Integer[]} arr
# @return {Void} Do not return anything, modify arr in-place instead.
def duplicate_zeros(arr)
    tmp = arr.each_with_object([]){|x, obj|
      if x.zero?
        obj.push(0) ; obj.push(0)
      else 
        obj.push(x)
      end
    }
    # remove_size = tmp.size - arr.size
    # new_arr = remove_size.times do
    #   tmp.pop()
    # end
    # return new_arr
    (0...arr.size).each{|i| arr[i] = tmp[i]}
end