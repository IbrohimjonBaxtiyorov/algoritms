function reverseList (head) {
   newArr=[]
   for(let i=head.length-1;i>=0;i--){
    newArr.push(head[i])
   }
   
   return newArr
};

console.log(reverseList([1,2,3,4,5,15,514,45,45,4,5])); //[5, 4, 45, 45, 514,15, 5,  4,  3,   2,1]
console.log(reverseList([12,32,54])) //[54,32,12]
console.log(reverseList([]))//[]
