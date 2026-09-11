function firstDup(string) {
    return string.split('').filter(i=>string.indexOf(i) != string.lastIndexOf(i))[0] || undefined;
}
console.log(firstDup('translator'))