function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i].toString();
        let b = arr[i + 1].toString();
        if (a === b.split("").reverse().join("")) {
            return [Number(a), Number(b)];
        }
    }
    return [-1, -1];
}
console.log(mirrorImage([454, 0, 57, 0, 16, 88]))