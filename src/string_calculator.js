// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	var numbers = string_numbers.split(',');
	var result = 0;
	if (string_numbers.includes(',')) {
		result = parseInt(string_numbers.split(',')[0]) + parseInt(string_numbers.split(',')[1]);
	}
	 else if (string_numbers.length > 0) {
		result = parseInt(string_numbers);
	}
	else {
		result = 0;
	}
	return result;
};
