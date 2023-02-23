# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num)

def guessNumber(n)
    left = 1
    right = n
    
    while left <= right do
        mid = (left + right) / 2
        res = guess(mid)
       
        if res < 0
            right = mid -1
        elsif res > 0
            left = mid + 1
        else
            return mid
        end
    end
end