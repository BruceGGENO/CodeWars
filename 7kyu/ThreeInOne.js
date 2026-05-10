function threeInOne(arr) {
    let res = []
    for (let i = 0; i < arr.length; i = i + 3) {
        res.push(arr.slice(i, i + 3).reduce((a, b) => a + b))

    }
    return res
}
console.log(threeInOne([1, 2, 3, 4, 5, 6]))
