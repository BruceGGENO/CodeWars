function duplicateCount(text) {
    return [...new Set(text.toLowerCase().split('').filter(i => text.toLowerCase().indexOf(i) !== text.toLowerCase().lastIndexOf(i)))].length
}
console.log(duplicateCount('aabBcde'))
