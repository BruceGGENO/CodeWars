function sumFactorial(arr) {
    let total = 0

    for (var j = 0; j < arr.length; j++) {
        var factorial = 1
        for (var i = 1; i <= arr[j]; i++) {
            factorial *= i;
        }
        total += factorial
    }

    return total
}