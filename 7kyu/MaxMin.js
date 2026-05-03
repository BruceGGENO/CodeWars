function maxMin(arr1, arr2) {
    //coding here...
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(Math.abs(arr1[i] - arr2[i]));
    }
    return [Math.max(...result), Math.min(...result)]
}