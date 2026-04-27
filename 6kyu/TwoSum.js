function twoSum(numbers, target) {
    var result = [];
    var firstIndex, lastIndex;
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] + numbers[i] === target && i != j) {
                firstIndex = j
                lastIndex = i
            }
        }
    }
    return [firstIndex, lastIndex];
}