function mostFrequentItemCount(collection) {
    let result = {}
    for (let i = 0; i < collection.length; i++) {
        if (result[`${collection[i]}`]) result[`${collection[i]}`]++
        else result[`${collection[i]}`] = 1
    }
    let max = 0;
    for (let res in result) {
        if (result[res] > max) max = result[res]
    }
    return max
}