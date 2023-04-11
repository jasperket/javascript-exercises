const findTheOldest = function(people) {
    let oldestName = "";
    people.reduce((accumulator,currentValue) => {
        const age = currentValue.yearOfDeath - currentValue.yearOfBirth;
        if(age > accumulator) {
            oldestName = currentValue.name;
            return age;
        }
        return accumulator;
    },people[0].yearOfDeath - people[0].yearOfBirth,1)
    for(let i = 0; i < people.length; i++) {
        if(people[i].name === oldestName) {
            return people[i];
        }
    }
    return null;
};

// Do not edit below this line
module.exports = findTheOldest;
