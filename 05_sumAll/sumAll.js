const sumAll = function(rangeStart, rangeEnd) {
    if(typeof(rangeStart) == "number" && typeof(rangeEnd) == "number" && rangeStart >= 0 && rangeEnd >= 0){
        let [min, max] = rangeStart < rangeEnd ? [rangeStart, rangeEnd]: [rangeEnd, rangeStart];
        // Formula to get sum of numbers from 1 to n: n(n+1)/2
        // Modified formula is sum of 1...n minus 1...n-1.
        // If min is 1, then follow formula. If not, then use modified formula
        return min === 1 ? max*(max+1)/2: (max*(max+1)/2) - (min*(min+1)/2);
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
