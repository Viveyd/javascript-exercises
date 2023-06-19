const repeatString = function(str, reps) {
    if(reps < 0) return "ERROR";
    let result = "";
    while(reps > 0){
        result += str;
        reps--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
