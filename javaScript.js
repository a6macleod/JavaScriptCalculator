// JavaScript Calculator Sep 2018
let answer;
let tempNum = "";
let newOperator;
let calculation = [];

// MOUSE CLICK NUMBERS
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(function(currentBut) {
	currentBut.addEventListener('click', function () {
		clearAnswer();	
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
// MOUSE CLICK OPERATORS
const operButtons = document.querySelectorAll('.operatorButton');
operButtons.forEach(function(currentOper) {
	currentOper.addEventListener('click', function () {
		clearAnswer();
		newOperator = currentOper.value;
		let text = currentOper.value;
		if (operatorCheck(tempNum) == false) {
			numberPush(); // This will push the previous numbers to the array
			tempNum += text;
			updateDisplay();
		} else {
			changeOperator(); // CHANGE OPERATOR IF AVAILABLE
			
		}
	});
});

// "AC" clear button 
let clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
	tempNum = "";
	updateAnswer();
});

// "del" DELETE BUTTON
let del = document.querySelector('#delete');
del.addEventListener('click', function() {
	clearAnswer();
	let update = tempNum;
	tempNum = update.slice(0, -1);
	updateDisplay();
});

// "=" EQUALS BUTTON
let equal = document.querySelector('#equals');
equal.addEventListener('click', function() {
	operate();
});

// "+/-" CHANGE POSITIVE/NEGATIVE BUTTON
let positivity = document.querySelector('#positivity');
positivity.addEventListener('click', function() {
	let negCheck = tempNum.slice(0, 1);
	if (negCheck == "-") {
		tempNum = tempNum.substring(1);
		updateDisplay();
		return;
	} else {
	let negAdd = "-" + tempNum;
	tempNum = negAdd;
	updateDisplay();
	}
});

function operatorCheck () {
	let tNum = tempNum.slice(-1);
		if (tNum == '/' || tNum == '*' || tNum == '-' || tNum == '+'){
			return true; 
		} else {
			return false;
		}
}
function numberPush () {
	calculation.push(Number(tempNum));
	tempNum = '';
}
function operatorPush () {
	let sign = tempNum;
		calculation.push(sign);
		tempNum = '';
}
function updateDisplay () {
	document.querySelector('.equationDisplay').textContent = tempNum;
}
function updateAnswer () {
	document.querySelector('.answerDisplay').textContent = answer;
	updateDisplay();
	saveAnswer();
	answer = '';
	calculation = [];
}
 //"." decimal point check
function decimalCheck () {
	if (tempNum.length === 0) {
		tempNum += '0.';
		updateDisplay();
	} else if (tempNum.indexOf('.') < 0){
		tempNum += '.';
		updateDisplay()
	}
};
// Operate at "="
function operate () {
	if (operatorCheck(tempNum) == false) {
		numberPush();
		let calc = calculation.join();
		let string = calc.replace(/,/g, '');
		answer = eval(string);
		if(answer.toString().length > 7) {
			answer = answer.toFixed(2);
			updateAnswer();
		} else		
		updateAnswer();
	}
}
function changeOperator () {
	let update = tempNum;
	update = update.slice(0, -1);
	update += newOperator;
	tempNum = update;
	updateDisplay();
}
function saveAnswer() {
	let saveAnswer = answer.toString();
	tempNum = saveAnswer;
}
function clearAnswer() {
	document.querySelector('.answerDisplay').textContent = answer;
}

// KEYBOARD NUMBER TYPING
document.addEventListener('keydown', function (event) {
	const keyName = event.key;
	if((Number(keyName) >= 0 || Number(keyName) <=9)) {
		clearAnswer();
		if (operatorCheck(tempNum) == true) {
				operatorPush(); // This will push the last operator to the array if available
			} else
				tempNum += keyName.toString();
				updateDisplay();
		} else 
		if (keyName == '/' || keyName == '*' || keyName == '-' || keyName == '+'){
			clearAnswer();
			if (operatorCheck(tempNum) == false) {
				numberPush(); // This will push the previous numbers to the array
				tempNum += keyName;
				updateDisplay();
			} else {
				changeOperator(); // CHANGE OPERATOR IF AVAILABLE
			}
		} else 
		if (keyName == 'Backspace') {
			clearAnswer();
			let update = tempNum;
			tempNum = update.slice(0, -1);
			updateDisplay();
		} else
		if (keyName == "Enter") {
			operate();
		} else
		if (keyName === '.') {
			if (operatorCheck(tempNum) == true) {
				operatorPush(); // This will push the last operator to the array if available
			}
			clearAnswer();
			decimalCheck();
		} else
		if (keyName === 'Delete') {
			calculation = [];
			tempNum = "";
			answer = "";
			updateAnswer();
			updateDisplay();
		}
	});




