function checkValidTrNumber(n) {
    if (n.toString().length !== 11 && n.toString().match(/\D/gi)) return false;
    else {
        let odds = n.toString().split('').map(Number).filter((el, i) => {
            if (i !== 10) {
                return i % 2 === 0
            }
        }).reduce((a, b) => a + b, 0)
        let eves = n.toString().split('').map(Number).filter((el, i) => {
            if (i !== 9) {
                return i % 2 !== 0
            }
        }).reduce((a, b) => a + b, 0)
        let tens = n.toString().split('').map(Number).filter((el, i) => {
            return i !== 10

        }).reduce((a, b) => a + b, 0)
        return (odds * 7 - eves) % 10 === Number(n.toString().split('')[9]) && tens % 10 == n.toString().split('')[10]
    }
}
console.log(checkValidTrNumber(10167994524))