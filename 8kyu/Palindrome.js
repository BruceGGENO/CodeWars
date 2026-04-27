function isPalindrome(x) {
    // your code here
    let gon = x.toLowerCase();
    let split = gon.split("")
    var rev = split.reverse();
    let joh = rev.join("")

    if (gon === joh) return true;
    else return false;
}