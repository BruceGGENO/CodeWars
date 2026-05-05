function solution(string) {
    return string.split("").length === 0 ? "" : string.split("").reduce((acc, char) => {
        if (char.match(/[A-Z]/)) acc += " ";
        return acc + char;
    });
}