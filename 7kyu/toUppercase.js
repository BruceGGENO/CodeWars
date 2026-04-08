function alienLanguage(str) {
    //coding here...
    var word = str.toUpperCase().split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].split("")
    }
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            word[i][word[i].length - 1] = word[i][word[i].length - 1].toLowerCase();
        }
    }
    return word.join(" ").split(",").join("");
}