function sumSquares(array) {
    return array.reduce((acc, cur) => acc + (cur ** 2), 0);
}