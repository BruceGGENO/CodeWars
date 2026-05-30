function toWeirdCase(string) {
    let res = string.toLowerCase().split("");
    let count = 0;
    for (let i = 0; i < res.length; i++) {
        if (count % 2 === 0) {
            res[i] = res[i].toUpperCase()
        }
        if(res[i-1]===" "){
            res[i] = res[i].toUpperCase()
            count = 0
        }
        count++
    }
    return res.join("")
}
console.log(toWeirdCase("UPPER CASE"))