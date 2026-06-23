function noBoringZeros(n) {
    let result = n.toString().split('')
    for (let i = 0; i <= result.length; i++) {
        if (result.join('').endsWith('0') && result.length !== 1) result.pop()
    }

    return Number(result.join(''))
}