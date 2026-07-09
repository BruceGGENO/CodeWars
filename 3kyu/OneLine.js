checkRange = (a, x, y) => a.filter(i => i >= x && i <= y).length

console.log(checkRange([1,2,3,4,5,6,7,8],3,5))