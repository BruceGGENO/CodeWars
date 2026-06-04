function alphabetized(s) {
    let arr = s.replaceAll(' ', '').split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
    return arr
}
console.log(alphabetized('The Holy Bible'))
