function multi(arr) {
    var multi = 1;
    for (let i = 0; i < arr.length; i++) {
        multi *= arr[i];
    }
    return multi;
}
function add(arr) {
    var add = 0;
    for (let i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}
function reverse(str) {
    var reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse
}