let capitals = function (word) {
    return word.split('').map((i, ix) => i === i.toUpperCase() ? ix : i).filter(i => typeof i === 'number')
};
console.log(capitals('AAAaabB'))