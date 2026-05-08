function countSheeps(sheep) {
    return sheep === null || sheep === undefined ? 0 : sheep.filter(i => i === true).length
}