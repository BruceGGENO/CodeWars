function cutIt(arr) {
    //coding here...
    var short = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (short.length > arr[i].length) {
            short = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, short.length);
    }
    return arr
}