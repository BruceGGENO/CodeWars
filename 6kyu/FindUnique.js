function findUnique(numbers) {
    return numbers.reduce((a, b) => a ^ b);
}