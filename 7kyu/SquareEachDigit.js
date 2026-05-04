function squareDigits(num) {
    let result = num.toString().split("");
    for (let i = 0; i < result.length; i++) result[i] = result[i] ** 2;
    return Number(result.join(""));
}