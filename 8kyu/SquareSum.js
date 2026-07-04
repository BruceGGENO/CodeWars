function squareSum(numbers) {
    return numbers.map(i => i * i).reduce((a, b) => a + b, 0)
}