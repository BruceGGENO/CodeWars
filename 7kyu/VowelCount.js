function getCount(str){
    return str.split("").filter(i=>i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u').length;
}
console.log(getCount("abracadabra"))