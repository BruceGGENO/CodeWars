function sortByArea(array) {
    return array.map(i => Array.isArray(i) ? i.reduce((a, b) => a * b) : i * i * Math.PI).map(i => i.toFixed(2)).map(Number).sort((a, b) => a - b);
}