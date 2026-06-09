var singleNumber = function(nums) {
    let result=nums[0]
    for(let i = 1 ; i< nums.length ; i++){
       result ^= nums[i]
        
    }
    return result
};

const nums = [1,2,1,4,2]

console.log(singleNumber(nums))

// XOR