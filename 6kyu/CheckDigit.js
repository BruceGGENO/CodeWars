function addCheckDigit(number) {
    // your code
    var sum = 0, multi = 2;
    for (var i = number.length - 1; i >= 0; i--) {
        if (multi % 8 === 0) multi = 2
        sum += number[i] * multi;
        multi++
    }
    var reminder = sum % 11;
    if (reminder === 0) var checkDigit = 0
    else if (reminder === 1) var checkDigit = "X"
    else var checkDigit = 11 - reminder;
    return number + checkDigit + ""
}