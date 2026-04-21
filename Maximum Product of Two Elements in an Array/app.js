var maxProduct = function(nums) {
    if(nums.length>2){
        let sortedArr=nums.sort((a,b)=>b-a)
        return (sortedArr[0]-1)*(sortedArr[1]-1)
    } 
    return (nums[0]-1)*(nums[1]-1)
    
};

console.log(maxProduct([5,9]));