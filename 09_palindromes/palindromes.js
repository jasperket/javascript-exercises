const palindromes = function (str) {
    const letters = str.replaceAll(/[^a-z]+/ig, '');
    const len = letters.length;
    let firstHalf, secondHalf;
    if(len % 2 === 0) {
        firstHalf = letters.slice(0, len/2);
        secondHalf = letters.slice(len/2);
    } else {
        firstHalf = letters.slice(0, len/2);
        secondHalf = letters.slice(len/2 +1);
    }
    for(let i = firstHalf.length-1, j = 0; i >= 0; i--, j++) {
        if(firstHalf.charAt(i).toLowerCase() !== secondHalf.charAt(j).toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
