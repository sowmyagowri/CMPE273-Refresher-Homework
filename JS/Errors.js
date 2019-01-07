function division(numerator,denominator) {
	this.numerator = numerator;
	this.denominator = denominator;
	try {
		if (denominator == 0) {
			throw {
				error: "The denominator cannot be zero"
			}
		}
		else {
			console.log("The answer is "+ numerator/denominator);
		}
	}
	catch (exception) {
		console.log("Error message : " + exception.error);
	}
}

var divideNumbers = new division(10,9);
var divideNumbers = new division(10,0);