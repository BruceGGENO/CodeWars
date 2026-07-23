function dirReduc(arr) {
    const opposites = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
    
    const result = [];
    
    for (const dir of arr) {
        if (result.length > 0 && result[result.length - 1] === opposites[dir]) {
            result.pop();
        } else {
            result.push(dir);
        }
    }
    
    return result;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))