function howMuchCoffee(events) {
    // Code go here
    const validEvents = ["cw", "dog", "cat", "movie"];

    let count = events.filter(event => validEvents.includes(event.toLowerCase())).length;

    return count > 3 ? "You need extra sleep" : count;
}
console.log(howMuchCoffee(['cw','CAT','DOG']))