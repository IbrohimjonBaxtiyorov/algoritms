var recoverOrder = function(order, friends) {
    let retArr=[]
    for(let i=0;i<order.length;i++){
        for(let j=0;j<friends.length;j++){
           if(order[i]===friends[j]){
            retArr.push(order[i])
           }
        }
    }
    return retArr
};

let order = [3,1,2,5,4]
let  friends = [1,3,4]


console.log(recoverOrder(order, friends)) 