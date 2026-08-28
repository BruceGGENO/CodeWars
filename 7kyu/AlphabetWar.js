function alphabetWar(fight) {
    let arr = [[], []]
    let left = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }
    let right = {
        m: 4,
        q: 3,
        d: 2,
        z: 1

    }
    fight.split('').map(i => {
        if (Object.keys(left).includes(i)) arr[0].push(left[i])
        else if (Object.keys(right).includes(i)) arr[1].push(right[i])
    })


    return arr[0].reduce((a, b) => a + b, 0) > arr[1].reduce((a, b) => a + b, 0) ? 'Left side wins!' : arr[1].reduce((a, b) => a + b, 0) > arr[0].reduce((a, b) => a + b, 0) ? 'Right side wins!' : "Let's fight again!"
}
console.log(alphabetWar('mgps'))