function sumLength(arr) {
    var sum = 0;
    var neg = 0;
    var z = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
        else {
            if (arr[i] === 0 && z % 2 === 0) {
                neg++;
                z++;
            }
            else if (arr[i] === 0 && z % 2 !== 0) z++
            else neg++
        }
    }
    return `${sum} ${neg}`;
}