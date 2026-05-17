function move_zeros(arrNum, isRight) {
    return isRight === true || isRight == undefined ? arrNum.filter(i => i !== 0).concat(arrNum.filter(i => i === 0)) : arrNum.filter(i => i === 0).concat(arrNum.filter(i => i !== 0))
}