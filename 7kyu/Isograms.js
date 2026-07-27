function isIsogram(str) {
    return str.split('').map(i => str.match(new RegExp(i, 'gi')).length === 1).every(i=>i===true)
}
console.log(isIsogram('aba'))