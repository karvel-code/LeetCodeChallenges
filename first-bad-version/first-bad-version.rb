# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
    left = 0
    right = n
    result = n
    
    while left <= right do
        mid = (left + right) / 2
        
        if is_bad_version(mid)
            result = mid
            right =  mid - 1
        else
            left = mid + 1
        end
    end
    
    result
   
end