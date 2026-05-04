function findOutlier(integers) {
    //your code here
    return integers.filter(num => num % 2 === 0).length > 1 ? Number(integers.filter(num => num % 2 !== 0)) : Number(integers.filter(num => num % 2 === 0))

}