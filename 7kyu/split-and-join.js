function splitAndMerge(string, separator) {
    var words = string.split(" ");
    const neww = words.map(words => words.split("").join(separator))
    return neww.join(" ")
}