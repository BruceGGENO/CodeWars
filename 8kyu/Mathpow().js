function cutCube(volume, n) {
    //coding here...
    var m = volume % n == 0 ? true : false
    var int
    if (Math.cbrt(n) % 1 == 0 && m) {
        int = Math.cbrt(volume / n) % 1 == 0 ? true : false
        return int
    }
    else {
        return false;
    }
}
