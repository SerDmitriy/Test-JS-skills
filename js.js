"use strict";
let counterQuestions = 0;
let counterCorrectQuestions = 0;
const answers = [];
let mainDb = [{
		question: "What is the description of NaN? ",
		answers: [
			{ value: "Not a Null", truth: false },
			{ value: "Nothing else Needed", truth: false },
			{ value: "Not a Number", truth: true },
			{ value: "Negotiate a Number", truth: false }
		]
	},
	{
		question: "Find incorrect option to empty an array in JavaScript?",
		answers: [
			{ value: "By assigning an empty array: array = array.clear();", truth: true },
			{ value: "By assigning array length to 0: array.length = 0;", truth: false },
			{ value: "By popping the elements of the array: while(array.length > 0) { array.pop(); }", truth: false },
			{ value: "By using the splice array function: array.splice(0, array.length);", truth: false }
		]
	},
	{
		question: "What way is incorrect to create an array in JS?",
		answers: [
			{ value: "By creating instance of an array: var someArray = new Array();", truth: false },
			{ value: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);", truth: true },
			{ value: "By using an array constructor: var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’);", truth: false },
			{ value: "By using an array literal: var someArray = [value1, value2,…., valueN];", truth: false }
		]
	},
	{
		question: "What is a result of using typeof null?",
		answers: [
			{ value: "Null", truth: false },
			{ value: "Number", truth: false },
			{ value: "Function", truth: false },
			{ value: "Object", truth: true }
		]
	}
];

const mainForm = document.getElementById("main-form");
const randomize = arr => arr.sort(() => .5 - Math.random());

initialize();

function nextQuestion() {
	pushAnswer();
	counterQuestions++;
	if (counterQuestions >= mainDb.length) {
		counterQuestions = 0;
		showResult();
		return
	}
	display();
}

function showResult() {
	mainForm.innerHTML = ``;
	mainDb.forEach((item, index, arr) => {
		createDiv(item.question, "question");
		item.answers.filter(item => item.truth).forEach(item => createDiv(`Right answer:${item.value}`, 'right-answer'));
		createDiv(`Your answer:${answers[index]}`, 'wrong-answer');
	});
}

function createDiv(text, className) {
	let div = document.createElement('div');
	div.innerText = `${text}`;
	div.className = className;
	mainForm.appendChild(div);
};

function initialize() {
	counterQuestions = 0;
	randomize(mainDb).forEach(item => randomize(item.answers));
	display();
}

function pushAnswer() {
	let result = document.querySelector("input:checked");
	if (result == undefined) { answers.push(`No answer`) } else { answers.push(result.value) }
}

function showQuestion() {
	let question = document.createElement('div');
	question.innerText = `${counterQuestions + 1}. ${mainDb[counterQuestions].question}`;
	mainForm.appendChild(question);
}

<<<<<<< HEAD
=======
function showAnswers() {
	mainDb[counterQuestions].answers.forEach((item, index, array) => {
		let rowAnswer = document.createElement('input');
		rowAnswer.type = "radio";
		rowAnswer.name = "answer-checkbox";
		rowAnswer.value = `${item.value}`;
		mainForm.appendChild(rowAnswer);

		let spanAnswer = document.createElement('span');
		spanAnswer.innerHTML = `${item.value}`;
		mainForm.appendChild(spanAnswer);

		let br = document.createElement('br');
		mainForm.appendChild(br);
	});
}

function showNextBtn() {
	let button = document.createElement('button');
	button.type = "button";
	button.id = 'button';
	button.innerHTML = `Next question`;
	mainForm.appendChild(button);
>>>>>>> d089554b4695463cdf651601925f6d4b5e60bf9a
}

function display() {
	mainForm.innerHTML = ``;
	showQuestion();
	showAnswers();
	showNextBtn();
	document.getElementById("button").onclick = nextQuestion;
}