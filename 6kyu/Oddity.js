function oddity(n) {
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 'odd' : 'even';
    //The theory is if a number's square root is a perfect square it has an 'odd' number of divisors
}
console.log(oddity(12))