const snakeCase = function(str) {
    let snak = "";
    for(let i = 0; i < str.length; i++){ // Append letter or _ to the return value snak
        const char = str[i];
        if(isLetter(char) === true){
            snak += char;
            continue;
        }
        const lastAppend = snak[snak.length-1];
        if(isLetter(char) === false && lastAppend !== "_"){
            snak += "_";
        }
    }
    if(snak == str){ // If nothing changed, check again but this time for camelCase
        snak = "" // Reset return value snak
        for(let i = 0; i < str.length; i++){
            const char = str[i];
            if(isLowerCaseLetter(char.charCodeAt())){
                snak += char;
                continue;
            }
            if(isUpperCaseLetter(char.charCodeAt())){
                snak += `_${char}`;
            }
        }
    }
    if(snak.slice(-1) == "_") snak = snak.slice(0,-1) // Trim excess _
    return snak.toLowerCase(); // Because snake_case is all lowercase
};

function isLetter(char){
    const charCode = char.charCodeAt();
    return (isLowerCaseLetter(charCode) || isUpperCaseLetter(charCode)) ? true : false;
}

function isUpperCaseLetter(charCode){
    return (charCode >= 65 && charCode<= 90) ? true: false;
}

function isLowerCaseLetter(charCode){
    return (charCode >= 97 && charCode<= 122) ? true: false;
}
// Do not edit below this line
module.exports = snakeCase;
