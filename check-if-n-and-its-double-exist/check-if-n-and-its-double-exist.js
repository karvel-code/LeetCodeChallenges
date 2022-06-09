/**
 * @param {number[]} arr
 * @return {boolean}
 */
    // return false if arr.length == 0 || arr.empty?
    // arr.each do |i|
    //     if arr.include?(i)
    //         arr.each do |j|
    //             j = i / 2
    //             if arr.include?(j)
    //                 return true
    //             end
    //         end
    //     end
    // end
    // return false
var checkIfExist = function(arr) {
    if (arr.length == 0) {
        return false
    }
    for (let i = 0; i < arr.length ; i++) {
        const currValue = arr[i];
        for (let j = 0; j < arr.length ; j++) {
            const possibleValue = arr[j]
            if(possibleValue === currValue / 2 && i !== j) {
                return true
            }
        }
        
    }
    return false
};