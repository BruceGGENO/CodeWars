function squareOrSquareRoot(array) {
    var neww = [];
    for (var i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 !== 0) neww.push(Math.pow(array[i], 2))
        else neww.push(Math.sqrt(array[i]))
    }
    return neww;
}