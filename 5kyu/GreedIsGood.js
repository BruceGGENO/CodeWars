function score(dice) {
    let a = dice.filter(i => i === 1).length >= 3 ? 1000 + (100 * (dice.filter(i => i === 1).length - 3)) : 100 * dice.filter(i => i === 1).length;
    let b = dice.filter(i => i === 2).length >= 3 ? 200 : 0;
    let c = dice.filter(i => i === 3).length >= 3 ? 300 : 0;
    let d = dice.filter(i => i === 4).length >= 3 ? 400 : 0;
    let e = dice.filter(i => i === 5).length >= 3 ? 500 + (50 * (dice.filter(i => i === 5).length - 3)) : 50 * dice.filter(i => i === 5).length;
    let f = dice.filter(i => i === 6).length >= 3 ? 600 : 0;
    return a + b + c + d + e + f
}
console.log(score([2, 2, 2, 2, 3]))

//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)