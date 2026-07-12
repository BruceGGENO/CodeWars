function uglifyWord(s) {
    let str = s.split('')
    let f = 1
    for (let i = 0; i < str.length; i++) {
        if (f && str[i].match(/[a-zA-Z]/)) {
            str[i] = str[i].toUpperCase()
            f = 0
        }
        else if (!f && str[i].match(/[a-zA-Z]/)) {
            str[i] = str[i].toLowerCase()
            f = 1
        }
        else f = 1
    }
    return str.join('')
}