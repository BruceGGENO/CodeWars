function oddity(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count += 1;
    }
    return count % 2 === 0 ? 'even' : 'odd';
}
console.log(oddity(12))