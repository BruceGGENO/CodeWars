function findOdd(A) {
    let result = {}
    for (let i = 0; i < A.length; i++) {
        if (result[`${A[i]}`]) result[`${A[i]}`]++
        else result[`${A[i]}`] = 1
    }
    let odd = 1;
    for (let res in result) {
        if (result[res] % 2 !== 0) return Number(res)
    }
}
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))