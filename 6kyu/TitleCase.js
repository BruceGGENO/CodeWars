function titleCase(title='', minorWords='') {
    return title===undefined || title==='' ? '' : title.toLowerCase().split(' ').map((i, ix) => ix === 0 ? i[0].toUpperCase()+i.slice(1) : minorWords.toLowerCase().split(' ').includes(i) ? i : i[0].toUpperCase() + i.slice(1)).join(' ');
}
console.log(titleCase('a bc', 'BC'))