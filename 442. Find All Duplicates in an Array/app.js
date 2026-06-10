var findDuplicates = function(nums) {
    let unique =new Set()
    let duplicateNumbers=[]
    for(const num of nums){
        if(unique.has(num)){
            duplicateNumbers.push(num)
        }else{
            unique.add(num)
        }
    }
    return duplicateNumbers
    
};

let nums = [4,3,2,7,8,2,3,1]  //[ 2, 3 ]
console.log(findDuplicates(nums));


// MEDIUM
