String.prototype.toAlternatingCase = function () {
    return this.split('').map(i => i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join('')
}