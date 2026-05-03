function averages(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1]) result.push((numbers[i] + numbers[i + 1]) / 2);
    }
    return !numbers.length || numbers.length === 1 ? [] : result;
}
console.log(averages([1, 3, 5, 1, -10]))