function persistence(num) {
    let count = 0;
    let n = num.toString()
    n = n.toString().split('').map(Number).reduce((a, b) => a * b)
    let arr = []

    while (true) {
        if (n.toString().length > 1) {
            n = n.toString().split('').map(Number).reduce((a, b) => a * b)
            arr.push(n)
        }
        else break
    }

    return num.toString().length>1 ? arr.length + 1 : 0
}
console.log(persistence(25))