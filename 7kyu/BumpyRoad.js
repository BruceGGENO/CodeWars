function bump(x) {
    return x.split("").filter(n => n === "n").length <= 15 ? "Woohoo!" : "Car Dead"
}
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))