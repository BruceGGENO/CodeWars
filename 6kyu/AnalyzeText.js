function analyzeText(input) {
    let str = input.toLowerCase().replaceAll("!", "").replaceAll(".", "").replaceAll(",", "").replaceAll("?", "").split(" ");
    let str1 = input.toLowerCase().replaceAll("!", "").replaceAll(".", "").replaceAll(",", "").replaceAll("?", "").split(" ");


    let obj = {
        uniqueWords: [],
        wordFrequency: {},
        longestWord: "",
        sortedByFrequency: [],
    };
    obj.uniqueWords = unique(str);
    let word = function () {
        for (let i = 0; i < str1.length; i++) {
            if (obj.wordFrequency[`${str1[i]}`]) {
                obj.wordFrequency[str1[i]]++;
            }
            else {
                obj.wordFrequency[str1[i]] = 1;
            }
        }
        return obj.wordFrequency;
    }
    obj.wordFrequency = word();
    obj.longestWord = longestWord(str);
    return obj;
}
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && j != i) arr.splice(i, 1)
        }
    }
    return arr;
}
function longestWord(arr) {
    let longest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) longest = arr[i]
    }
    return longest;
}
function wordFrequency(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (obj.wordFrequency[`${arr[i]}`]) {
            obj.wordFrequency[arr[i]]++;
        }
        else {
            obj.wordFrequency[arr[i]] = 1;
        }
    }
}



console.log(analyzeText("Hello world! Hello developerrs. Hello Developers love JavaScript, and JavaScript love developers."))