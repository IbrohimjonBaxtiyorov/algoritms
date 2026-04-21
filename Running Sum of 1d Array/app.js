var runningSum = function(nums) {
    let arr=[nums[0]]
    for(let i=1;i<nums.length;i++){
        arr.push(arr[i-1]+nums[i])
    }
    return arr
};

console.log(runningSum([1,2,3,4]))  //[ 1, 3, 6, 10 ]