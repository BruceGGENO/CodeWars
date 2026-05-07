function noBoringZeros(n) {
    let result = n.toString().split("")
    for(let i=0;i<result.length;i++){
        if(result[result.length-1]==="0") result.pop()
    }
    
    return result==="0" ? 0 : Number(result.join(""))
}
console.log(noBoringZeros(960000))