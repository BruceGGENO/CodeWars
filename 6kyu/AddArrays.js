function addArrays(array1, array2) {
    return array1.length === 0 && array2.length === 0 ? [] : (parseInt(array1.join('')) + parseInt(array2.join(''))).toString().split("");

}