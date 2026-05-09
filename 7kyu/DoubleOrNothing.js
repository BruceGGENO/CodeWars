function doubleOrNothing(cash, wager, losses) {
    let final = cash - wager * (Math.pow(2, losses - 1));
    return final >= 0 ? final : "I'll pay you back later";
}
console.log(doubleOrNothing(480, 30, 5))