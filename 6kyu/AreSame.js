function comp(array1, array2){
  return array1.map(i=>array2.includes(i*i)).every(i=>i===true)
}
console.log(comp([2,2,3],[4,9,9]))
console.log([1,2,3,4,5].match())