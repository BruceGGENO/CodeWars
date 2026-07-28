function explode(x) {
    let res = []
    if (x.every(Number))
        for (let i = 0; i < x.reduce((a, b) => a + b); i++) res.push(x)
    else if (x.some(Number)) {
        if (Number(x.filter(Number)) === 0) res = []
        for (let i = 0; i < Number(x.filter(Number)); i++) res.push(x)
    }
    else if (x.every(i=> typeof i=== 'string')) res = 'Void!'
    return res
}
console.log(explode(['a', 0]))