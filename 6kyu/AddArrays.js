function addArrays(array1, array2) {
    return array1.length === 0 && array2.length === 0 ? [] : (Number(array1.join('')) + Number(array2.join(''))).toString().split("");

}