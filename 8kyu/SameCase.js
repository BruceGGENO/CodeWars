function sameCase(a, b) {
    return typeof a !== "string" || typeof b !== "string" ? -1 :
        (a >= "a" && a <= "z") && (b >= "a" && b <= "z") ? 1 :
            (a >= "A" && a <= "Z") && (b >= "A" && b <= "Z") ? 1 : 0;
}
console.log(sameCase("H", ":"))