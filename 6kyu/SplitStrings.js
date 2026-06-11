function solution(str) {
    let res = []
    for (let i = 0; i < str.length; i += 2) {
        res.push(str[i + 1] ? `${str[i]}${str[i + 1]}` : `${str[i]}_`)
    }
    return res
}
console.log(solution('abc'))