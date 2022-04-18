const removeFromArray = function(array, ...elementsToRemove) {
    for (const element of elementsToRemove) {
        array.splice(array.indexOf(element), 1);
    }  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
