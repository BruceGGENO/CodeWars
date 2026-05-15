function solve(a, b) {
    const counts = {};
    for (const str of b) {
        counts[str] = 0;
    }
    for (const str of a) {
        if (counts.hasOwnProperty(str)) {
            counts[str]++;
        }
    }

    return counts;
}


console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']));