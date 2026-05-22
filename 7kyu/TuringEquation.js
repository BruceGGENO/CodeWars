function isTuringEquation(s){
    let res = s.split(/[^0-9]/g)
    let sum= Number(res[0].split("").reverse().join(""))+Number(res[1].split("").reverse().join(""))
    return Number(res[2].split("").reverse().join("")) === sum;
}
console.log(isTuringEquation("73+42=16"))