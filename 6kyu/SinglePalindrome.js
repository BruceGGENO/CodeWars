function solve(s) {
    if (s === s.split("").reverse().join("")) return "OK";
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(0, i) + s.slice(i + 1);
        if (str === str.split("").reverse().join("")) {
            return "remove one";
        }
    }

    return "not possible";
}
console.log(solve("abbaab"))