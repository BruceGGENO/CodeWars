function evenOrOdd(n) {
  return Array.isArray(n) && n[0] % 2 === 0 ? 'Even' : n % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd([2]))
console.log(evenOrOdd(2))
console.log(evenOrOdd([4]))