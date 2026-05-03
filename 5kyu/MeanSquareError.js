const solution = function (firstArray, secondArray) {
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        result.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2));
    }
    return result.reduce((a, b) => a + b) / result.length;
}