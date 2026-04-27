function countAnimals(animals, count) {
    //coding here...
    var result = [];
    for (var i = 0; i < count.length; i++) {
        result.push((animals.match(new RegExp(count[i], "gi")) || []).length)
    }
    return result

}