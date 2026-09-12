function microWorld(bacteria, k) {
    for (let i = 0; i < bacteria.length; i++) {
        for (let j = 0; j < bacteria.length; j++) {
            if (bacteria[j] > bacteria[j + 1] && bacteria[j] <= bacteria[j + 1] + k) bacteria.splice(j + 1, 1)
        }
    }
    return bacteria
}
console.log(microWorld([101, 53, 42, 102, 101, 55, 54], 1))