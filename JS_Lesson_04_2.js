 let arr = [ 7, -15, 20, 31, -5, -4, 51, 30, 50, 52, -1, 100, -20, 33, 14, 70, 80, -45, -11, -40 ];

 let overMinus = arr.filter(myFunctionMinus);

 function myFunctionMinus(value) {
   return value < 0;
 }

function compareNumbers(number1, number2) {
	return number2 - number1;
}

overMinus.sort(compareNumbers);

console.log(overMinus)

let overPlus = arr.filter(myFunctionPlus)

function myFunctionPlus (value) {
    return value >= 0;
}

function compareNumbers(number1, number2) {
	return number1 - number2;
}

overPlus.sort(compareNumbers);

console.log(overPlus)
