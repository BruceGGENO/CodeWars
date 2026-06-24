function isPowerOfTwo(n) {
    return n > 0 && Number.isInteger(Math.log2(n));
}
console.log(isPowerOfTwo(40977667))