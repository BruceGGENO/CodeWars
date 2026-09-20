function sumDigPow(a, b) {
    let res = []
    for (let i = a; i <= b; i++) {
        let n = []
        if (i.toString().split('').map(a => Math.pow(Number(a), 2)).reduce((a, b) => a + b) === i) res.push(i)
    }
    return res
}
console.log(sumDigPow(1, 10))