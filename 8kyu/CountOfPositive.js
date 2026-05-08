function countPositivesSumNegatives(input) {
    let sum = 0, count = 0
    if (input === null || input === undefined) return []
    if (input.length === 0) return []
    else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) count++;
            if (input[i] < 0) sum += input[i]
        }
    }
    return [count, sum]
}
console.log(countPositivesSumNegatives())