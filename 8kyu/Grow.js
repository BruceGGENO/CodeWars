function grow(x) {
    result = x[0];
    for (var i = 1; i < x.length; i++) {
        result *= x[i]
    }
    return result
}