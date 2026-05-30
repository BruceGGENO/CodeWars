function openOrSenior(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) result.push('Senior');
        else result.push('Open')

    }
    return result
}
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))