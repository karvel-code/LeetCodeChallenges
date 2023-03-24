# @param {Integer} num
# @return {Boolean}
def is_perfect_square(num)
    left = 0
    right = num
    
    return true if num == 1
    
    while left <= right
        mid = (left + right) / 2
        if (mid * mid) == num
            return true
        elsif (mid * mid) > num
            right = mid - 1
        else
            left = mid + 1
        end
    end
    false
end