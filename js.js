
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
        rightAnswer: 3,
        showed: false
    },
    {
        number: 2,
        question: "Find incorrect option to empty an array in JavaScript?",
        answer1: "By assigning an empty array: array = array.clear();",
        answer2: "By assigning array length to 0: array.length = 0;",
        answer3: "By popping the elements of the array: while(array.length > 0) { array.pop(); }",
        answer4: "By using the splice array function: array.splice(0, array.length);",
        rightAnswer: 1,
        showed: false
    },
    {
        number: 3,
        question: "What way is incorrect to create an array in JS?",
        answer1: "By creating instance of an array: var someArray = new Array(); ",
        answer2: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);",
        answer3: "By using an array constructor: var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’); ",
        answer4: "By using an array literal: var someArray = [value1, value2,…., valueN];",
        rightAnswer: 2,
        showed: false
    },
    {
        number: 4,
        question: "What is a result of using typeof null?",
        answer1: "Null",
        answer2: "Number",
        answer3: "Function",
        answer4: "Object",
        rightAnswer: 4,
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
    display();
}

function checkRight() {
    /*let checkedAnswer = 0; //for understanding way of refactiring
    if (firstOptionRadio.checked == true) { checkedAnswer = 1; }
    if (secondOptionRadio.checked == true) { checkedAnswer = 2; }
    if (thirdOptionRadio.checked == true) { checkedAnswer = 3; }
    if (fourthOptionRadio.checked == true) { checkedAnswer = 4; } 
    if (mainDb[counterQuestions].rightAnswer == checkedAnswer) {counterCorrectQuestions++}
    */
    if (answerCheckboxes[mainDb[counterQuestions].rightAnswer - 1].checked == true) {
        counterCorrectQuestions++
    }  // i'll split it, if it would be needed

}

function display() {
    answerCheckboxes.forEach((i) => { i.checked = false });

    questionText.innerText = mainDb[counterQuestions].number + ". " + mainDb[counterQuestions].question;

    firstOptionText.innerText = `${mainDb[counterQuestions].answer1}`;
    secondOptionText.innerText = `${mainDb[counterQuestions].answer2}`;
    thirdOptionText.innerText = `${mainDb[counterQuestions].answer3}`;
    fourthOptionText.innerText = `${mainDb[counterQuestions].answer4}`;

    progressValue.value = counterQuestions;
}
