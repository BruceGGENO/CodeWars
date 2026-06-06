function countGrade(scores) {
    return {
        S: scores.filter(x => x === 100).length,
        A: scores.filter(x => x < 100 && x >= 90).length,
        B: scores.filter(x => x < 90 && x >= 80).length,
        C: scores.filter(x => x < 80 && x >= 60).length,
        D: scores.filter(x => x < 60 && x >= 0).length,
        X: scores.filter(x => x === -1).length
    }
}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]))