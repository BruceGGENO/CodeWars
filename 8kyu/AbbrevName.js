function abbrevName(name) {
    let result = [];
    let n = name.split(" ");
    for (let i = 0; i < n.length; i++) {
        result.push(n[i].split("")[0].toUpperCase())
    }
    return result.join(".")
}
console.log(abbrevName("Bruce geno"))