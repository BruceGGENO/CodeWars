function race(v1, v2, g) {
    let time = g / (v2 - v1)
    let totalSeconds = time * 3600
    let hours = Math.floor(totalSeconds / 3600)
    let minutes = Math.floor((totalSeconds % 3600) / 60)
    let seconds = Math.floor(totalSeconds % 60)

    return v2 > v1 ? [hours, minutes, seconds] : null
}
console.log(race(720, 850, 70))