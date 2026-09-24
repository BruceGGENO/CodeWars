function digitalRoot(n) {
    while (true) {
        if (n.toString().length > 1) {
            n = n.toString().split('').map(Number).reduce((a, b) => a + b, 0)
        }
        else {
            return n
        }
    }
    return n

}
console.log(digitalRoot(1613))