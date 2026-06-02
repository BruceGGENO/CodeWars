function domainName(url) {
    return url.replace(/https?:\/\//,'').replace(/^www\./,'').split('.')[0]
}
console.log(domainName('www.xakep.ru'));