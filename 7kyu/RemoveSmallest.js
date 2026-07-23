function removeSmallest(numbers) {
    return numbers.filter((n, i, a) => i !== numbers.indexOf(Math.min(...numbers)))
}
console.log(removeSmallest([]))