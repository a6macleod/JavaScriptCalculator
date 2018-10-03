// JavaScript Calculator Sep 2018
let answer;
let tempNum = "";
let newOperator;

// CLICK NUMBERS
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(function(currentBut) {
	currentBut.addEventListener('click', function () {
		let text = currentBut.value;
		if (tempNum.length < 8) {
			tempNum += text;
			updateDisplay();
		}
	});
});
// CLICK OPERATORS
const operButtons = document.querySelectorAll('.operatorButton');
operButtons.forEach(function(currentOper) {
	currentOper.addEventListener('click', function () {
		newOperator = currentOper.value;
		let text = currentOper.value;
		let check = tempNum.slice(-1);
		if (check === '%' || check === '/' || check === '*' || check === '-' || check === '+') {
			changeOperator(); // CREATE CHANGE OPERATOR FUNCTION
		} else 
//		if (check === '.') {
//			decimalCheck();
//		} else
		if (tempNum.length < 8) {
			tempNum += text;
			updateDisplay();
		}
	});
});

// "AC" clear button 
let clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
	tempNum = "";
	updateDisplay();
});
// "del" DELETE BUTTON
let del = document.querySelector('#delete');
del.addEventListener('click', function() {
	let update = tempNum;
	update = update.slice(0, -1);
	tempNum = update;
	updateDisplay();
});
// "=" EQUALS BUTTON
let equal = document.querySelector('#equals');
equal.addEventListener('click', function() {
//	let update = tempNum;
//	update = update.slice(0, -1);
//	tempNum = update;
	updateDisplay();
});

function updateDisplay () {
document.querySelector('.equationDisplay').textContent = tempNum;
}
function updateAnswer () {
document.querySelector('.answerDisplay').textContent = answer;
}
function changeOperator () {
	console.log("delete the last operator!")
	console.log(newOperator);
	let update = tempNum;
	update = update.slice(0, -1);
	update += newOperator;
	tempNum = update;
	updateDisplay();
}
// "." decimal point check
// function decimalCheck () {
//	let check = tempNum;
//	decimal = '.';
//	if (string.includes(decimal)) {
//		prompt("Sorry! you can't enter two decimal points")
//		return;
//	}
//};

// Operate at "="
function operate (tempNum) {
	return new Function('return ' + tempNum) ();
	updateAnswer();
}



// 1) first number is set is st up as a string and each number and decimal button appends to it
// 2) pressing an operator button will convert firstNumber to a number and append that operator to the equation
// 3) pressing a different operator button will change the operator 
// 3) pressing the equals sign will complete the function
// 4) So overall, typing adds numbers to a function and the operators 












