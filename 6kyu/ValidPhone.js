function validPhoneNumber(phoneNumber) {
    return /(xxx) xxx-xxxx/.test(phoneNumber)
}
console.log(validPhoneNumber('(123) 654-3456'))