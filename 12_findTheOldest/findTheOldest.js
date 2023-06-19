const findTheOldest = function(peopleArr){
    return peopleArr.sort((a, b) => getAge(a.yearOfBirth, a.yearOfDeath) - getAge(b.yearOfBirth, b.yearOfDeath))[peopleArr.length-1];
};

const getAge = function(bd, dd = new Date().getFullYear()){
    return dd - bd;
}

// Do not edit below this line
module.exports = findTheOldest;
