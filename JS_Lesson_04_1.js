function alert(array) {
	console.log(array);
}

let array = [ 7, -15, 20, 33, -5, -4, 51, 30, 50, 52, -1, 100, -20, 33, 14, 70, 80, -45, -11, -40 ];

function compareNumbers(number1, number2) {
	return number1 - number2;
}

array.sort(compareNumbers);
alert(array);

array.reverse();
alert(array);


