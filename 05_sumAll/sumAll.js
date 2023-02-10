const sumAll = function(n1,n2) {
    let sum = 0;
    if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return 'ERROR';
    }
    if(n1 < n2) {
        for(let i = n1; i <= n2; i++) {
            sum += i;
        }
    } else {
        for(let i = n2; i <= n1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
