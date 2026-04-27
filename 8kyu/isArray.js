function blackAndWhite(arr) {
    //coding here...
    if (!Array.isArray(arr)) return "It's a fake array"
    else {
        return (arr.includes(5) && arr.includes(13)) ? "It's a black array" : "It's a white array"
    }
}