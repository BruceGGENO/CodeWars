function deleteNth(arr,n){
  let p=[]
  for(let i=0;i<arr.length;i++){
    if(arr.filter(i=>arr[i]).length<n) p.push(arr[i])
  }
  return p
}
console.log(deleteNth([20,37,20,21], 1))