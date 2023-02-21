# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    left = 0
    right = x
    
    return x if x < 2 
    
    while left <= right do
        mid = (left + right) / 2
        if (mid * mid) == x
            return mid
        elsif (mid * mid) > x
            right = mid -1
        else (mid * mid) < x
            left = mid + 1
        end
    end
    right
    
end