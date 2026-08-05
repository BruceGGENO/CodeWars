function findUniq(arr) {
  return Number(arr.filter(i=>arr.indexOf(i)==arr.lastIndexOf(i)))
}
