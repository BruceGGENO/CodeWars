function nextSquareSum(n) {
    let sum = 0;

    do {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    } while (n > 0);

    return sum;
}

function squareDigitsSequence(a) {
    const seen = new Set();
    let current = a;
    let length = 0;

    while (!seen.has(current)) {
        seen.add(current);
        length++;
        current = nextSquareSum(current);
    }

    return length + 1; // includes the repeated final number
}

console.log(squareDigitsSequence(103));  