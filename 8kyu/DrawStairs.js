function drawStairs(n) {
  let space="";
  let result="";
  let arr=[];
  for(let i=0;i<n;i++){
    if(i===0) result="I"
    if(i===n-1){
        result=space+"I"
    }
    result=space+"I\n"
    space+=" ";
    arr.push(result)
  }
  return arr.join("")
}
console.log(drawStairs(4))