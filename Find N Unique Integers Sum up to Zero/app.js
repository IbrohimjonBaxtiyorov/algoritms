// Find N Unique Integers Sum up to Zero

var sumZero = function(n) {
    let arr=[]
    if(n%2!=0){
        arr.push(0)
    }
    for(let i =1 ;i<=n/2;i++){
        arr.push(i)
        arr.unshift(-i) 
    }
    return arr
};

console.log(sumZero(8)) ///[ -4, -3, -2, -1,  1,  2,  3,  4]
console.log(sumZero(7)) ///[  -3, -2, -1, 0, 1,  2,  3]
console.log(sumZero(11)) ///[ -5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(sumZero(1)) //[0]

