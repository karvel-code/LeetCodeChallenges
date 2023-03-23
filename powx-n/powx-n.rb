# @param {Float} x
# @param {Integer} n
# @return {Float}
def my_pow(x, n)
    result = 1
    k = n.abs
    
    return 1 if n == 0
    
    while k >= 1 
        if k % 2 == 1
            result *= x
        end
            x = x * x
            k = k/2
    end
    return n > 0 ? result : 1.0/result
end
