function isPowerOfTwo(n) {
    let check = false;
    for (let i = 0; i <= n; i++) {
        if (Math.pow(2, i) === n) check = true
    }
    return check
}