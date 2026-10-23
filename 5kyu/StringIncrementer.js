function incrementString(str) {
    let num = []
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (/[0-9]/g.test(Number(str[i]))) {
            num.unshift(Number(str[i]));

        }
        else break;
    }
    s = str.slice(0, str.length - num.length)
    return !Number.isNaN(Number(str[str.length - 1])) ? s + (Number(num.join('')) + 1) : s + 1;
}
console.log(incrementString('foo90bar1'))

