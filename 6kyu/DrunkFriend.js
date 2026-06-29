function decode(str) {
    if(typeof str !== 'string') return 'Input is not a string'
    let res = str.split('')
    let alphal = 'abcdefghijklmnopqrstuvwxyz'
    let alphau = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let revl = alphal.split('').reverse().join('')
    let revu = alphau.split('').reverse().join('')
    for (let i = 0; i < res.length; i++) {
        if (alphal.includes(res[i]) || alphau.includes(res[i])) {
            if (res[i] === res[i].toUpperCase()) {
                res[i] = revu[alphau.indexOf(res[i])]
            }
            else {
                res[i] = revl[alphal.indexOf(res[i])]
            }
        }
    }
    return res.join('')
}
console.log(decode('Blf zoivzwb szw 10 yvvih'))
console.log(decode("Tl slnv, blf'iv wifmp"))
console.log(decode(['b', 'd']))
console.log(9)
