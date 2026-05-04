function findOutlier(integers) {
    //your code here
    return integers.filter(num => num % 2 === 0).length > 1 ? Number(integers.filter(num => num % 2 !== 0)) : Number(integers.filter(num => num % 2 === 0))

}
console.log(findOutlier([1, 3, 5, 6, 2]))