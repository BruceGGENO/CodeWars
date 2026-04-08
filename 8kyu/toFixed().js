function howManySmaller(arr, n) {
    //coding here..
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toFixed(2);
    }
    var small = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            small++;
        }
    }
    return small;

}