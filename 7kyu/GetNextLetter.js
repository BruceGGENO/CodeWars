function getNextLetter(name) {
    const char = name[0];
    const code = char.charCodeAt(0);

    if (char === 'z') return 'a';
    if (char === 'Z') return 'A';

    return String.fromCharCode(code + 1);
}