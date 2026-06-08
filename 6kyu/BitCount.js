function countBits(n) {
    return n.toString(2).split('').filter(x=>x==1).length;
}
console.log(countBits(1234))