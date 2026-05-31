function take(arr, n) {
    if (!arr || arr.length === 0) return []
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (i === n) break
        res.push(arr[i])
    }
    return res
}