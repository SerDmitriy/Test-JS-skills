"use strict";
let counterQuestions = 0;
let counterCorrectQuestions = 0;
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

document.getElementById("button").onclick = nextQuestion;

const mainForm = document.getElementById("main-form");
const questionText = document.getElementById("question");
const progressValue = document.getElementById("progress-value");

//const answerCheckboxes = document.getElementsByName("question-form__answer-checkbox");
//const answersText = document.getElementsByClassName("question-form__answer-text");

//window.onload = initialize;
initialize()

function nextQuestion() {
    checkRight();
    counterQuestions++;
    // console.dir(counterCorrectQuestions + " right from " + counterQuestions + " questions.");
    // if (counterQuestions == mainDb.length) {
    //     alert(`Task finished, your score ${counterCorrectQuestions} from ${mainDb.length}`);
    //     initialize();
    // };

    display();
}

function randomize(arr) {
    arr.sort(() => .5 - Math.random());
}

function initialize() {
    console
    counterQuestions = 0;
    randomize(mainDb).forEach(item => randomize(item.answers));
    display();
}

function checkRight() {
    //let result = document.querySelector("input:checked");
    //console.dir(result);
}

function showHeader() {
    let header = document.createElement('div');
    header.innerText = `${counterQuestions + 1}. ${mainDb[counterQuestions].question}`;
    mainForm.appendChild(header);
}

function showAnswers() {
    mainDb[counterQuestions].answers.forEach((item, index, array) => {
        let rowAnswer = document.createElement('input');
        rowAnswer.type = "radio";
        rowAnswer.name = "answer-checkbox";
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
    mainForm.appendChild(button);
}


function display() {
    mainForm.innerHTML = ``;
    showHeader();
    showAnswers();
    showNextBtn();
    //answerCheckboxes.forEach((i) => { i.checked = false });

}