const repeatString = function(stringToRepeat, numberOfTimes) {
    let string = "";

    if (numberOfTimes < 0) {
        return "ERROR";
    }
    for (let i = 0; i < numberOfTimes; i++) {
        string += stringToRepeat;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
