// JavaScript Calculator Sep 2018
let answer;
let tempNum = "";
let newOperator;
let calculation = [];

// CLICK NUMBERS
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(function(currentBut) {
	currentBut.addEventListener('click', function () {
		console.log(calculation);	
		let text = currentBut.value;
		if (operatorCheck(tempNum) == true) {
			operatorPush(); // This will push the last operator to the array if available
		}
		if (text === '.') {
				decimalCheck();
		} else
			tempNum += text;
			updateDisplay();
		});
});
// CLICK OPERATORS
const operButtons = document.querySelectorAll('.operatorButton');
operButtons.forEach(function(currentOper) {
	currentOper.addEventListener('click', function () {
		console.log(calculation);
//		numberPush(); // This will push the previous numbers to the array
		newOperator = currentOper.value;
		let text = currentOper.value;
//		let check = tempNum;
		if (operatorCheck(tempNum) == false) {
			numberPush();
			changeOperator(); // CREATE CHANGE OPERATOR FUNCTION
		} else if (tempNum.length < 8) {
			tempNum += text;
			updateDisplay();
		}
	});
});

// "AC" clear button 
let clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
	tempNum = "";
	answer = "";
	updateAnswer();
	updateDisplay();
});
// "del" DELETE BUTTON
let del = document.querySelector('#delete');
del.addEventListener('click', function() {
	let update = tempNum;
	tempNum = update.slice(0, -1);
	updateDisplay();
});
// "=" EQUALS BUTTON
let equal = document.querySelector('#equals');
equal.addEventListener('click', function() {
	operate();
});

function operatorCheck () {
	let tNum = tempNum.slice(-1);
//	console.log("operatorCheck " + tNum);
		if (tNum == '/' || tNum == '*' || tNum == '-' || tNum == '+'){
//			console.log('operatorCheck = true');
			return true; 
		} else {
//			console.log('operatorCheck = false');
			return false;
		}
}

function numberPush () {
	if (tempNum >= 0) {
			calculation.push(Number(tempNum));
			tempNum = '';
			console.log(calculation);
		}
	}

function operatorPush () {
		let sign = tempNum;
		console.log("the sign is " + sign);
			calculation.push(sign);
			tempNum = '';
			console.log(calculation);
}
function updateDisplay () {
document.querySelector('.equationDisplay').textContent = tempNum;
}
function updateAnswer () {
document.querySelector('.answerDisplay').textContent = answer;
}
function changeOperator () {
//	console.log("delete the last operator!")
//	console.log(newOperator);
	let update = tempNum;
	update = update.slice(0, -1);
	update += newOperator;
	tempNum = update;
	updateDisplay();
}
 //"." decimal point check
function decimalCheck () {
	if (tempNum.length === 0) {
		tempNum += '0.';
		updateDisplay();
	} else if (tempNum.indexOf('.') < 0){
		tempNum += '.';
		updateDisplay()
		console.log("decimal")
	}
};

// Operate at "="
function operate () {
let calc = tempNum;
answer = eval(calc);
updateAnswer();
saveAnswer();
}
//function saveAnswer() {
//	let saveAnswer = answer;
//	tempNum = saveAnswer;
//	console.log(tempNum);
//}


// 1) Create separate functions for the operators
// 2) create an Array that can take numbers and operators
// 3) keyboard is tied to the calculator
// 3) after the equals sign  the answer is the first number of new equation
// 4) snarky comment for trying to divide over zero











