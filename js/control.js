const getRotatingIcon = document.querySelector(".divider .circle");
const calculatorForm = document.querySelector("form");
const calculatorButton = document.querySelector("form .calculate button");
const resultBoard = document.querySelector(".result");
const love_container = document.querySelector("._love-container-inner");
const inputForms = document.querySelectorAll("form .form-input .form-control");
const displayBoard = document.querySelector(".write-error p");

let Interval = "";

// run random time multiplier
function RunRandomTime() {
	let RandomTime = "";
	let Integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let i = 1; i < 2; i++) {
		RandomTime = Integers[Math.floor(Math.random() * 8)];
	}
	return RandomTime;
}
const timeMultiplier = RunRandomTime();

// listen for form submission
calculatorForm.addEventListener("submit", function (e) {
	e.preventDefault();
	// inputForms.forEach((input) => {
	// });
	for (let input of inputForms) {
		const INPUT_VALUE = input.value.trim();
		CheckValue(INPUT_VALUE);
	}
});

// validation of input
function CheckValue(value) {
	let minNameLength = 3;
	let InputLength = value.length;

	if (InputLength === 0) {
		Error("Name cannot be empty");
	} else if (!InputLength === 0 && !isNaN(value)) {
		Error("Name cannot be a number");
	} else if (isNaN(value) && value.length < minNameLength) {
		Error("Name cannot be less than 3 characters");
	} else {
		ValidationPassed();
		RunLoading();
	}
}

// display error message if successful validation isn't met
function Error(errorReceived) {
	displayBoard.innerHTML = `${errorReceived}  <em class="bi bi-exclamation-circle-fill"></em>`;
}

function ValidationPassed(passedValue = "") {
	displayBoard.innerHTML = passedValue;
	let Result = RunRandomValues();
	Interval = setTimeout(() => {
		resultBoard.innerHTML = `<h3>Love Rate  : &nbsp;&nbsp;${Result}%</h3>`;
		const hasClass = getRotatingIcon.classList.contains("checking");
		if (hasClass) {
			getRotatingIcon.classList.remove("checking");
		}
	}, timeMultiplier * 1500);
}

function RunRandomValues() {
	let RandomNumber = "";
	let Integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	for (let i = 0; i < 2; i++) {
		let twoNumbers = Integers[Math.floor(Math.random() * 9)];
		RandomNumber += twoNumbers;
	}
	return RandomNumber;
}

function RunLoading() {
	getRotatingIcon.classList.add("checking");
}
