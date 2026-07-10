function findSimilarity(str, word) {
    let reg = new RegExp(`^${word[0] + word.slice(1, -1).replace(/./g, '.') + word.slice(-1)}$`)
    return str.split(' ').filter(i => reg.test(i)).join(' ')
}
console.log(findSimilarity("bag dog dig dot doog dogs", "dog"))