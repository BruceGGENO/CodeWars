var searchArray = function (arrayToSearch, query) {
    if (Array.isArray(query) && query.length === 2 && arrayToSearch.every(i => Array.isArray(i) && i.length === 2)) return arrayToSearch.map(i => i[0] === query[0] && i[1] === query[1]).indexOf(true)
    else throw new Error()
}
console.log(searchArray([[8, 9], [5]], [5, 9]))