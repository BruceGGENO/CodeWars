function spreadNumber([...n]) {
    let arr = [n]
    for (let i = n; i > 1; i--) {
        arr.unshift(i - 1)
    }
    return arr
}
console.log(spreadNumber(5))