var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    const ln=x.toString()
    if(x<=9){        
        return true
    }
    if(ln.length<=3){
        let a=x%10
        let b=ln[0]        
        if(a==b){
            return true
        }else{
            return false
        }
    }
    let matchNum=""
    let secondNum=""
   
    for(let i=0;i<=ln.length/2-1;i++){
        matchNum+=ln[i]
    }
    for(let i=ln.length-1; i>=ln.length/2 ;i--){
        secondNum+=ln[i]
    }
    
    if(Number(matchNum)===Number(secondNum)){
        return true
    }else{
        return false
    }
    
   
};

console.log(isPalindrome(123321))//true
console.log(isPalindrome(121))//true
console.log(isPalindrome(88888))//true
console.log(isPalindrome(5))//true
console.log(isPalindrome(-5))//false
console.log(isPalindrome(54345))//true




