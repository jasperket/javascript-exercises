const removeFromArray = function(arr,...items) {
    for(const item of items) {
        let i = arr.indexOf(item);
        if(i != -1) {
            arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
