function hydrate(s) {
    let glasses=s.split(' ').filter(Number).map(Number).reduce((a,b)=>a+b)
    return glasses>1 ? `${glasses} glasses of water` : `${glasses} glass of water`  
}
console.log(hydrate('4 1 beer'))