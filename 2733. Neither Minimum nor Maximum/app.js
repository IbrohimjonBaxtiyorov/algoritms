var findNonMinOrMax = function (nums) {
    if(nums.length<=2) return -1
    let res = null;
    let max=nums[0]
    let min=nums[0]
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] > max){
          max = nums[i]
       }
      if(nums[i] < min){
         min = nums[i]
       }
    }
    for (let i=0 ;i< nums.length; i++){
        if(nums[i] !== min && nums[i] !== max){
            res=nums[i]
            return res
        }else{
            res=-1
        }
    }
    console.log(max)
    console.log(min)
    return res 
    
};
var nums = [3,2,1,4];  //3 or 2
console.log(findNonMinOrMax(nums));
