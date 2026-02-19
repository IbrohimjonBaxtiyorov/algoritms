var lengthOfLastWord = function(s) {
    count=0
   let trimmedStr= s.trim()
    for(let i=trimmedStr.length-1;i>=0;i--){
        if(trimmedStr[i]==" "){
            return count
        }else{
            count++
        }
        
    }
    return count
};

console.log(lengthOfLastWord("H"))//1
console.log(lengthOfLastWord("Hello World"));//5
console.log(lengthOfLastWord("John Doe  "));//3
