function pigLatin(string) {
    let vow = 'aeiou'
    let str=string.toLowerCase().split('');
    if (vow.includes(string[0])) return string.toLowerCase() + 'way'
    else if (string.match(/[0-9]/gi)) return null
    else {
        for(let i=0;i<str.length;i++){
            if(!vow.includes(str[0])){
                str.push(str.shift())
            }
        }
    }
    return str.join('') + 'ay'
}
console.log(pigLatin('mgf'))