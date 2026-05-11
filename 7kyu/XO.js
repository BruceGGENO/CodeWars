function XO(str) {
    let x=str.split("");
    return x.filter(i=>i==="o").length === x.filter(i=>i==="x").length ? true : false;
}
console.log(XO("oxxxo"))