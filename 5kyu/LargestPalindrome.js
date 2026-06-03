function largestPalindromicProduct(lower, upper) {
    let biggest = NaN
    let prod = 1
    for (let i = lower; i <= upper; i++) {
        for (let j = i; j <= upper; j++) {
            prod = i * j
            let rev = Number(prod.toString().split('').reverse().join(''))
            if (prod === rev) biggest = prod
        }
    }

    return biggest 
}
console.log(largestPalindromicProduct(4, 10))