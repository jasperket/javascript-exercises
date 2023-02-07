const reverseString = function(st) {
    let newSt = '';
    for(let i = st.length-1; i >= 0; i--) {
        newSt = newSt + st.charAt(i);
    }
    return newSt;
};

// Do not edit below this line
module.exports = reverseString;
