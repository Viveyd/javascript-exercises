const palindromes = function (str) {
    let valids = "abcdefghijklmnopqrstuvwxyz0123456789";;
    let cleanStr = str.toLowerCase().split("").filter(char => valids.includes(char));
    return cleanStr.join("") === cleanStr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
