function largestPalindromicProduct(lower, upper) {
    let biggest = NaN
    for (let i = upper; i >= lower; i--) {
        if (i * upper < biggest) break
        for (let j = upper; j >= i; j--) {
            let prod = i * j;
            if (prod < biggest) break;
            if (prod === Number(prod.toString().split('').reverse().join(''))) {
                biggest = prod;
                break;
            }
        }
    }

    return biggest
}
console.log(largestPalindromicProduct(4, 10))