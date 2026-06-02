function calculateHypotenuse(a, b) {
    if (a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number') {
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return Number(c.toFixed(3));
    }
    else throw new Error("undefined");
}
console.log(calculateHypotenuse(3, 4))