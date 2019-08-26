
"use strict";
let counterQuestions = 0;
let counterCorrectQuestions = 0;
let mainDb = [
    {
        number: 1,
        question: "What is the description of NaN? ",
        answer1: "Not a Null",
        answer2: "Nothing else Needed",
        answer3: "Not a Number",
        answer4: "Negotiate a Number",
        rightAnswer: "Not a Number",
        showed: false
    },
    {
        number: 2,
        question: "Find incorrect option to empty an array in JavaScript?",
        answer1: "By assigning an empty array: array = array.clear();",
        answer2: "By assigning array length to 0: array.length = 0;",
        answer3: "By popping the elements of the array: while(array.length > 0) { array.pop(); }",
        answer4: "By using the splice array function: array.splice(0, array.length);",
        rightAnswer: "By assigning an empty array: array = array.clear();",
        showed: false
    },
    {
        number: 3,
        question: "What way is incorrect to create an array in JS?",
        answer1: "By creating instance of an array: var someArray = new Array(); ",
        answer2: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);",
        answer3: "By using an array constructor: var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’); ",
        answer4: "By using an array literal: var someArray = [value1, value2,…., valueN];",
        rightAnswer: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);",
        showed: false
    },
    {
        number: 4,
        question: "What is a result of using typeof null?",
        answer1: "Null",
        answer2: "Number",
        answer3: "Function",
        answer4: "Object",
        rightAnswer: "Object",
        showed: false
    }
];

document.getElementById("submit-btn").onclick = nextQuestion;
const questionText = document.getElementById("question");
const firstOptionText = document.getElementById("first-option-text");
const secondOptionText = document.getElementById("second-option-text");
const thirdOptionText = document.getElementById("third-option-text");
const fourthOptionText = document.getElementById("fourth-option-text");
const progressValue = document.getElementById("progress-value");
const answerCheckboxes = document.getElementsByName("question-form__answer-checkbox");

window.onload = initialize;

function nextQuestion() {
    checkRight();
    counterQuestions++;
    console.dir(counterCorrectQuestions + " right from " + counterQuestions + " questions.");
    if (counterQuestions == mainDb.length) {
        alert(`Task finished, your score ${counterCorrectQuestions} from ${mainDb.length}`);
        initialize();
    };

    display();
}

function initialize() {
    counterQuestions = 0;
    counterCorrectQuestions = 0;

    for (let i = 0; i < mainDb.length; i++) {  // random sort question objects
        mainDb.sort((a, b) => Math.round(Math.random()) - 0.5);
    }

    for (let i = 0; i < mainDb.length; i++) {  // random sort answers in objects
        let newQuestionObj = [];                //need to rewrite
        for (let j = 1; j <= 4; j++) {
            newQuestionObj.push(mainDb[i]["answer" + j]);
        }

        //console.dir(newQuestionObj);
        for (let j = 1; j <= 10; j++) {
            newQuestionObj.sort(() => Math.round(Math.random()) - 0.5);
        }
        //console.dir(newQuestionObj);

        //console.dir(mainDb[i]);
        for (let j = 0; j <= 3; j++) {
            mainDb[i]["answer" + 0 + (j + 1)] = newQuestionObj[j];
        }
        //console.dir(mainDb[i]);
    }

    display();
}

function checkRight() {
    let rightCheckbox;
    let flagChosen = false;
    for (let i = 0; i < answerCheckboxes.length; i++) {
        if (answerCheckboxes[i].checked == true) {
            rightCheckbox = answerCheckboxes[i];
            flagChosen = true;
        }
    }
    if (flagChosen) {
        if (mainDb[counterQuestions].rightAnswer == rightCheckbox.nextElementSibling.innerText) {
            counterCorrectQuestions++
        }  //works better then next method
    }

    //rightCheckbox = Array.prototype.filter.call(answerCheckboxes, item => item.checked == true );
    // don`t work, when user didn`t choose answer option

    /*if (rightCheckbox != undefined && mainDb[counterQuestions].rightAnswer == rightCheckbox[0].nextElementSibling.innerText) {
        counterCorrectQuestions++
    }*/   // there should work rule of short hand operations in "if" comparemant
}

function display() {
    answerCheckboxes.forEach((i) => { i.checked = false });

    questionText.innerText = `${counterQuestions + 1}. ${mainDb[counterQuestions].question}`;

    firstOptionText.innerText = `${mainDb[counterQuestions].answer01}`;
    secondOptionText.innerText = `${mainDb[counterQuestions].answer02}`;
    thirdOptionText.innerText = `${mainDb[counterQuestions].answer03}`;
    fourthOptionText.innerText = `${mainDb[counterQuestions].answer04}`;

    progressValue.value = counterQuestions;
}
