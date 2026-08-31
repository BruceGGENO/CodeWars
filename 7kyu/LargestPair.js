function maxProduct(a) {
    return a.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b)
}
console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))