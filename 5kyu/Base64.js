function base64toBase10(base64) {
    let base = base64.split('').reverse()
    let res = 0;
    let dig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (let i = 0; i < base.length; i++) {
        res += dig.indexOf(base[i]) * Math.pow(64, i);
    }
    return res
}
console.log(base64toBase10('BA'))