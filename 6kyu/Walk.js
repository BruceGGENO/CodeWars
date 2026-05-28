function isValidWalk(walk) {
    let time = Math.abs((walk.join("").match(/n/gi)||[]).length - (walk.join("").match(/s/gi)||[]).length) + Math.abs((walk.join("").match(/w/gi)||[]).length - (walk.join("").match(/e/gi)||[]).length)
    return time===0 && walk.length===10 ? true : false;
}
console.log(isValidWalk(['n','n','n','s','n','s','n','s','e','s']))