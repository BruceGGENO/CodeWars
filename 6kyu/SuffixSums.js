function suffixSums(a) {
    let b = []
    for (let i = 0; i < a.length; i++) {
        b.push(a.reduce((a, b) => a + b))
        if (i === a.length - 1) b.push(a[i])
        a.shift()
    }
    return b
}
console.log(suffixSums([1, 2, 3, 4, 5, 6, 7]))