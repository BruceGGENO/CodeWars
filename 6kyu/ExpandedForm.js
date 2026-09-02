function expandedForm(num) {
    let n = num.toString().split('')
    let j = 0
    for (let i = n.length - 1; i >= 0; i--) {
        if (n[i] === 0) continue
        n[i] = n[i] * Math.pow(10, j)
        j++
    }
    return n.filter(i => i != 0).join(' + ')
}
console.log(expandedForm(70304))