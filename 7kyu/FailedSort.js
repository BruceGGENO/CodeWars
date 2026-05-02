let sortString = function (value) {
    return value.split('').sort((c, p) => c - p).join('');
}