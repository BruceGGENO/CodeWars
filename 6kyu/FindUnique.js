function findUnique(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && i != j) {
                result.push(numbers[j]);
            }
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (!result.includes(numbers[i])) return numbers[i]
    }
}