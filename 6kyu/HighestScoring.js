function high(x) {
    let y = x.toLowerCase().split(' ')
    let biggest = []
    for (let i = 0; i < y.length; i++) {
        biggest.push(y[i].split('').map(i => i.charCodeAt() - 96).reduce((a, b) => a + b))
    }
    return y[biggest.indexOf(Math.max(...biggest))]
}