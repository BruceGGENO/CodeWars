function cakes(recipe, available) {
    let cakes = [];
    for (let a in recipe) {
        cakes.push(Math.floor(available[a] / recipe[a]))
    }
    return cakes.includes(NaN) ? 0 : Math.min(...cakes)
}
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))