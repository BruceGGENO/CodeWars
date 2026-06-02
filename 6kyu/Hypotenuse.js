function calculateHypotenuse(a, b) {
    // TODO: complete calculateHypotenuse so that it returns the hypotenuse length
    // for a triangle with sides of length a, b, and c, where c is the hypotenuse.
    // The solution should verify that inputs are valid numbers (both above zero).
    if (a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number') {
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return Number(c.toFixed(3));
    }
    else throw new Error("undefined");
}
console.log(calculateHypotenuse(3, 4))