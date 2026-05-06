function sumArray(array) {
  if(!array || array.length===0) return 0
  if(array.length===1 || array.length===2) return 0
  let sum=0
  let arr=array.sort((a,b)=>a-b)
  for(let i=arr.length-2;i>=1;i--){
    sum+=arr[i];
  }
  return sum
}