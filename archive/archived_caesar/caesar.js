const caesar = function(str, shifts){
    return str.split("").map(char => {
        let charcode = char.charCodeAt();
        if(charcode > 64 && charcode < 91){ //  Shift if char is lowercase alphabet 
            return String.fromCharCode(shiftCC(charcode, shifts, 65, 90)); 
        } else if(charcode > 96 && charcode < 123){ // Shift if char is uppercase alphabet
            return String.fromCharCode(shiftCC(charcode, shifts, 97, 122)); 
        } else{ // Do nothing if char is non-alphabet
            return char;
        }
    }).join("");
};

function shiftCC(charCode, shifts, floor, ceil){
    charCode += shifts; // Shifting done if charCode within range(floor~ceil)
    while(charCode > ceil) {charCode = (floor-1)+(charCode-ceil)}; // Wrap if charCode above ceil
    while(charCode < floor) {charCode = (ceil+1)-(floor-charCode)}; // Wrap if charCode below ceil
    return charCode;
}

// Do not edit below this line
module.exports = caesar;
