function addArrays(array1, array2) {
    if ((!array1 || array1.length === 0) && (!array2 || array2.length === 0)) return [];
    if (!array1 || array1.length === 0) return array2;
    if (!array2 || array2.length === 0) return array1;

    let sum = parseInt(array1.join('')) + parseInt(array2.join(''));
    let result = Math.abs(sum).toString().split('').map(Number);
    if (sum < 0) {
        result[0] = -result[0];
    }

    return result;

}
console.log(addArrays([1], [-5, 8]));
