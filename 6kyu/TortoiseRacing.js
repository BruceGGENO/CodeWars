function race(v1, v2, g) {
    let time=g/(v2-v1)
    let hours=Math.floor(time)
    let minutes=Math.floor((time%1)*60)
    let seconds=Math.floor((((time%1)*60)%1)*60)
    return [hours,minutes,seconds]
}
console.log(race(720, 850, 70))