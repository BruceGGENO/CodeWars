function wave(str) {
    // Code here
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") continue
        var low = str.toLowerCase();
        const word = low.slice(0, i) + low[i].toUpperCase() + low.slice(i + 1)
        arr.push(word)
    }
    return arr
}