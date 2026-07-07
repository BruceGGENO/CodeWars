function validatePIN(pin = '') {
    return ((pin.match(/[\d]/g) || []).length === 4 || (pin.match(/\d/g) || []).length === 6) && (pin.match(/\d/g) || []).length === pin.length ? true : false
}
console.log(validatePIN('1234'))