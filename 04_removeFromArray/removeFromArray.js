const removeFromArray = function(arr, ...exes) {
    exes.forEach(ex => {
        let exIdx = arr.indexOf(ex);
        if(exIdx == -1) return;
        arr = [...arr.slice(0, exIdx), ...arr.slice(exIdx+1)]
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
