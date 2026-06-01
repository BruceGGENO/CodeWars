var uniqueInOrder = function (iterable) {
    let inp = typeof iterable === 'string' ? iterable.split('') : iterable;
    return inp.filter((i, ix) => i !== inp[ix - 1])
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))