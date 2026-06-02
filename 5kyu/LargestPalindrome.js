function largestPalindromicProduct(lower, upper) {
    let biggest=1
    for(let i=lower;i<=upper;i++){
        for(let j=i;j<=upper;j++){
            let prod= Number(i * j)
            let rev=prod.toString().split('').reverse.join('')
            if(prod === i*j) biggest=prod
        }
    }
    return prod
}
console.log(largestPalindromicProduct(1,3))