function longestConsec(strarr, k) {
    if(strarr.length==0 || k>strarr.length || k<=0) return ''
    let arr=[]
    for(let i=0;i<strarr.length;i++){
        let str=''
        for(let j=i;j<i+k;j++){
            if(strarr[j]!=undefined) str+=strarr[j]
        }
        arr.push(str)
    }
    return arr.sort((a,b)=>b.length-a.length)[0]
}
