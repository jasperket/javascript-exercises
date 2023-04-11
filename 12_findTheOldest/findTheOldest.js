const findTheOldest = function(people) {
    let oldestName = "";
    const oldestAge = people.reduce((accumulator,currentValue) => {
        let lastLivingYear;
        if("yearOfDeath" in currentValue) {
            lastLivingYear = currentValue.yearOfDeath;
        } else {
            const currentDate = new Date();
            lastLivingYear = currentDate.getFullYear();
        }
        const age = lastLivingYear - currentValue.yearOfBirth;
        if(age > accumulator) {
            oldestName = currentValue.name;
            return age;
        }
        return accumulator;
    },0);
    for(let i = 0; i < people.length; i++) {
        if(people[i].name === oldestName) {
            return people[i];
        }
    }
    return null;
};

// Do not edit below this line
module.exports = findTheOldest;
