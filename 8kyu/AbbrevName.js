function abbrevName(name) {
    return name.split(' ').map(i => i[0].toUpperCase()).join(".")
}
console.log(abbrevName("Bruce geno"))