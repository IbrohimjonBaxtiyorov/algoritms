var intersection = function(nums1, nums2) {
    let arr=[]
    for (let i=0 ; i< nums1.length;i++){
        for(let j=0; j<nums2.length ;j++){
            if (nums1[i]===nums2[j]){
             arr.push(nums1[i])
            }
        }
    }
    const unique = [...new Set(arr)];
   
  return unique
};


let nums1 = [3,1,2,2,8]
let nums2 = [3,2,5,21,8]
console.log(intersection(nums1,nums2)) //[ 3, 2, 8 ]
