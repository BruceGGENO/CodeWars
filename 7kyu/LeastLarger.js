function leastLarger(a, i) {
    return a.indexOf(a.filter(x => x > a[i]).sort((a, b) => a - b)[0])
}
console.log(leastLarger([4, 1, 3, 5, 6], 0))