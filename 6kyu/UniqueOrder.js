var uniqueInOrder = function (iterable) {
    let inp = typeof iterable === 'string' ? iterable.split('') : iterable;
    for (let i = 0; i < inp.length; i++) {
        if (inp[i] === inp[i + 1] || inp[i - 1] === inp[i]) inp.splice(i, 1)

        console.log(inp.join(''))
    }
    //return inp.join('')
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))