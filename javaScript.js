// JavaScript Calculator Sep 2018
let firstNumber = 0;
let secondNumber = 0;
let answer;
let tempNum = "";

//function operate () {
//	console.log(equation);
//}
 
//let display = firstNumber;
//display.document.querySelector('.displayScreen').textContent = firstNumber;




// CLICK NUMBERS
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(function(currentBut) {
	currentBut.addEventListener('click', function () {
		let text = currentBut.value;
		if (tempNum.length < 8) {
			tempNum += text;
			updateDisplay();

		}
		console.log(tempNum);
	});
});

// CLICK OPERATORS
const operButtons = document.querySelectorAll('.operatorButton');
operButtons.forEach(function(currentOper) {
	currentOper.addEventListener('click', function () {
		let text = currentOper.value;
		if (tempNum.length < 8) {
			tempNum += text;
			updateDisplay();
		}
		console.log(tempNum);
	});
});

function updateDisplay () {
document.querySelector('.displayScreen').textContent = tempNum;
}

// Operate at "="
function operate () {
	
}



// 1) first number is set is st up as a string and each number and decimal button appends to it
// 2) pressing an operator button will convert firstNumber to a number and append that operator to the equation
// 3) pressing a different operator button will change the operator 
// 3) pressing the equals sign will complete the function
// 4) So overall, typing adds numbers to a function and the operators 












