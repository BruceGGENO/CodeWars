function numbersOfLetters(integer) {
    let num = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    let res = [];
    let current = integer
    while (true) {
        let word = num[current];
        res.push(word);
        let next = word.length;
        if (num[next] && num[next].length === next) {
            res.push(num[next]);
            break;
        }

        current = next;
    }
    for(let i=0;i<res.length;i++){
        if(res[i]===res[i+1]) res.splice(i+1,1)
    }
    return res;
}

console.log(numbersOfLetters(4));  // ['four', 'four']
console.log(numbersOfLetters(1));  // ['one', 'three', 'five', 'four', 'four']