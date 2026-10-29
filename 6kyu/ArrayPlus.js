function upArray(arr) {
    return (Number(arr.join(''))+1).toString().split('').map(Number)
}
console.log(upArray([4, 3, 2, 5]))