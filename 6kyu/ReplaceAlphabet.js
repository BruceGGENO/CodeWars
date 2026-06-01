function alphabetPosition(text) {
    return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(i => i.charCodeAt(0)-96).join(' ')
}
console.log(alphabetPosition('The sunset sets at twelve o\' clock'))