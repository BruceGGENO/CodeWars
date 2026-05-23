function findMissingLetter(array) {
    let first = array[0].charCodeAt();
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let ALPHA = alpha.toUpperCase();
    let missing = "";
    if (array[0] === array[0].toUpperCase()) {
        for (let i = first; i <= first + array.length; i++) {
            if (array[i - first] !== ALPHA[i - 65]) {
                missing = ALPHA[i - 65];
                break;
            }
        }
    }
    else if (array[0] === array[0].toLowerCase()) {
        for (let i = first; i <= first + array.length; i++) {
            if (array[i - first] !== alpha[i - 97]) {
                missing = alpha[i - 97];
                break;
            }
        }
    }

    return missing

}
console.log(findMissingLetter(['P', 'R', 'S']))