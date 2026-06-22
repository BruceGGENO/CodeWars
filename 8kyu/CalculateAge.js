function calculateAge(a, b) {
    return a - b > 1 ? `You will be born in ${a - b} years.` : a - b === 1 ? 'You will be born in 1 year.' : a === b ? 'You were born this very year!' : b - a === 1 ? 'You are 1 year old.' : `You are ${b - a} years old.`
}
