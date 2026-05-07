// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
    var result = 0;
    if(string_numbers.includes(',')) {
        var numbers = string_numbers.split(',');
        while (numbers.length > 0) {
            if (!Number.isInteger(parseInt(numbers[0]))) {
                numbers.shift();
                continue;
            }
            result += parseInt(numbers[0]);
            numbers.shift();
        }
    }
    else {
        result = parseInt(string_numbers) || 0;
    }
    return result;
};