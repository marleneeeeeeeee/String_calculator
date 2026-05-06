
// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
    var numbers = string_numbers.split(',');
    var result = 0;
    while (numbers.length > 0) {
        result += parseInt(numbers[0]);
        numbers.shift();
    }
    return result;
};