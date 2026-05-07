function maxedOut(arr) {
    let num = arr.map(i => Math.pow(i, 3)).reduce((a, b) => a + b);
    return (num < Number.MAX_SAFE_INTEGER) ? num : "You've pushed me to the max!";
}
console.log(maxedOut([1, 2, 3]))
