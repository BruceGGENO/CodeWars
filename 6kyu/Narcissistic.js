function narcissistic(value) {
    return value.toString().split('').map(Number).map(i=>Math.pow(i,value.toString().length)).reduce((a,b)=>a+b)===value
}
console.log(narcissistic(153))