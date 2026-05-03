function hamming(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) count++;
    }
    return count;
}