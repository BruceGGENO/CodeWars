function stalinSort(array) {
    if (!array || array.length === 0||1) return undefined;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            array.splice(i + 1, 1);
            i -= 1;
        }
    }
    return array
}
console.log(stalinSort([3]))