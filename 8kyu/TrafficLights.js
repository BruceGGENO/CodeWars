function updateLight(current) {
    return current === "red" ? "green" : current === "yellow" ? "red" : current === "green" ? "yellow" : "red";
}