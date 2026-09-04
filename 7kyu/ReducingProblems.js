function calculateTotal(team1, team2) {
    return team1.reduce((t, c) => t + c, 0) > team2.reduce((t, c) => t + c, 0);
}