/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let increase = false;
    let decrease = true;
    if (arr.length < 3) {
        return false
    }
    
    //this while loop starts from the back of the array and finds the index i 
    //where the tail half of the array starts decreasing (the peak of the mountain)

    let i = arr.length-1;
    while(i >= 0){
        if(arr[i-1] - arr[i] <= 0){
            break;
        }
        else{
            --i;
         }
    }
    
    //this for loop starts from index 0 and goes to the previously determined index i. 
    //If there is any decrease on this traversal, the loop breaks and returns false.

    //the condition required to return true entails that the for loop did not break 
    //and that the value for i is not the last index of the array, as that is not a mountain array.

    for(let x = 0; x < i; x++){
        if(arr[x+1] - arr[x] <= 0){
            break;
        }
        else if(x+1 === i && i != arr.length-1){
            return true;
        }
    }
    return false;
};