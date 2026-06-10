var toLowerCase = function(s) {
    let newStr=""
    for(let i = 0 ; i < s.length ; i++){
      let num=s[i].charCodeAt(0)
      if(num<=90 &&num >=65){
        num=s[i].charCodeAt(0)+32
      }
     newStr+=String.fromCharCode(num)
    }
    return newStr
    
};

let s = "HellO"   // hello
console.log(toLowerCase(s));

