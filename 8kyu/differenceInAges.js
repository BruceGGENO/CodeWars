function differenceInAges(ages) {
    let max = Math.max(...ages);
    let min = Math.min(...ages);
    return [min, max, max - min];
}