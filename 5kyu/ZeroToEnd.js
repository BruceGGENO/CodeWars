function moveZeros(arr) {
    let nonZero = [], zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeros.push(arr[i]);
        else nonZero.push(arr[i]);
    }
    return nonZero.concat(zeros);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))