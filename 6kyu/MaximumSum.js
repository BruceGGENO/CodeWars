function maxSum(arr, range) {
    return Math.max(...range.map(i => arr.slice(i[0], i[1] + 1).reduce((a, b) => a + b)))
}
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]]))