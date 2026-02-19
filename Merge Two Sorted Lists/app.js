var mergeTwoLists = function(list1, list2) {
    let i = 0
    let j = 0

    let arr=[]
  while(i<list1.length&&j<list2.length){
    if(list1[i]<list2[j]){
        arr.push(list1[i])
        i++
    }else{
        arr.push(list2[j])
        j++
    }
  }
    return arr
};

let list1=[1,2,4]
let list2=[1,3,4]

console.log(mergeTwoLists(list1,list2));//[ 1, 1, 2, 3, 4 ]
