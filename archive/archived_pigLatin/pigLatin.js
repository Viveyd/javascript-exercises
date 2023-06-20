function pigLatin(string) {
    return string.split(" ").map(translator).join(" ");
};

function translator(word){
    if(isVowel(word[0])) return word+"ay";
    else if(isConsonantSounding(word[0], word[1], word[2]) || word[0]+word[1]+word[2] == "squ" ) return word.slice(3)+word.slice(0,3)+"ay";
    else if(isConsonantSounding(word[0], word[1]) || word[0]+word[1] == "qu") return word.slice(2)+word.slice(0,2)+"ay";
    else if(isConsonantSounding(word[0])) return word.slice(1)+word.slice(0,1)+"ay";
}

function isVowel(char){
    return [..."aeiou"].includes(char);
}

function isConsonantSounding(...chars){
    return chars.every(char => [..."bcdfghjklmnpqrstvwxyz"].includes(char));
}
  
// Do not edit below this line
module.exports = pigLatin;
