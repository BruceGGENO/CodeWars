function isValidIP(str) {
    return str.split('.').length == 4 && str.split('.').every(i => i.length <= 3 && Number(i) <= 255 && !i.startsWith(' ') && Number(i) <= 255 && !i.endsWith(' '))
}
console.log(isValidIP('\n1.2.3.4'))