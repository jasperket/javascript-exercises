const fibonacci = function(nth) {
    if(nth < 0) {
        return "OOPS";
    }
    let p = 0;
    let p1 = 1;
    let p2 = 1;
    for(let i = 3; i <= nth; i++) {
        p = p1 + p2;
        p2 = p1;
        p1 = p;
    }
    return p1;
};

// Do not edit below this line
module.exports = fibonacci;
