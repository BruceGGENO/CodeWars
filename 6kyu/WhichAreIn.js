function inArray(arr1, arr2) {
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j].includes(arr1[i])) res.push(arr1[i])
        }
    }
    return [...new Set(res)].sort((a, b) => a[0].charCodeAt() - b.charCodeAt())
}
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))