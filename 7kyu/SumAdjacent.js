var a = 0, b = 0, arr = [3, 6, 9, 6, 9, 3];
arr.some((x, i) => {
    a = arr[i];  //or a=x
    b = arr[i + 1];
    return a + b == 15
})
console.log(`${a} and ${b}`)