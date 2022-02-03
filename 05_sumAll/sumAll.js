const sumAll = function(number1, number2) {
    if ( number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2) ) {
        return "ERROR";
    }
    sum = 0;
    let start = Math.min(number1, number2);
    let end = Math.max(number1, number2);
    for (let i = start; i <= end; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
