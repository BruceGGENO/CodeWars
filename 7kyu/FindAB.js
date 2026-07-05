function findAB(numbers, c) {
    let res = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] * numbers[j] === c && i!=j) return [numbers[i],numbers[j]]
        }
    }
    return null
}
console.log(findAB([1,2,3], 3))