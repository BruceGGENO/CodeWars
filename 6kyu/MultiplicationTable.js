function multiplicationTable(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        let neww=[]
        for (let j = 1; j <= size; j++) {
            neww.push(i * j);
        }
        arr.push(neww)
    }
    return arr;
}
console.log(multiplicationTable(3))