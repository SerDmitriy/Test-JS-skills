'use strict';
const createId = () => Math.random().toString(10).substr(2,5)
let mainDb = [{
  id: createId(),
  question: "What is the description of NaN? ",
	answers: [
		{ value: "Not a Null", truth: false },
		{ value: "Nothing else Needed", truth: false },
		{ value: "Not a Number", truth: true },
		{ value: "Negotiate a Number", truth: false }
	]
},
{
  id: createId(),
  question: "Find incorrect option to empty an array in JavaScript?",
	answers: [
		{ value: "By assigning an empty array: array = array.clear();", truth: true },
		{ value: "By assigning array length to 0: array.length = 0;", truth: false },
		{ value: "By popping the elements of the array: while(array.length > 0) { array.pop(); }", truth: false },
		{ value: "By using the splice array function: array.splice(0, array.length);", truth: false }
	]
},
{
  id: createId(),
	question: "What way is incorrect to create an array in JS?",
	answers: [
		{ value: "By creating instance of an array: var someArray = new Array();", truth: false },
		{ value: "By using an array function: var someArray = function Array(‘value1’, ‘value2’,…, ‘valueN’);", truth: true },
		{ value: "By using an array constructor: var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’);", truth: false },
		{ value: "By using an array literal: var someArray = [value1, value2,…., valueN];", truth: false }
	]
},
{
  id: createId(),
	question: "What is a result of using typeof null?",
	answers: [
		{ value: "Null", truth: false },
		{ value: "Number", truth: false },
		{ value: "Function", truth: false },
		{ value: "Object", truth: true }
	]
}
];
const main = document.getElementById('questionList');

const admin = document.getElementsByClassName('admin')[0];
const adminPage = document.getElementsByClassName('admin-page')[0];


const createRow = (number, question, id) => {
	let el = document.createElement('div');
	el.className = 'row';
	el.innerHTML = `
	<div class="heiger">Questions list</div>
	<div class="question-list__text">${number}. ${question}</div>
	<div class="btn-wrapper"> 
	  <button class="question-list__edit">Edit</button>
	  <button class="question-list__del">X</button>
  </div>`;
  el.lastChild.children[0].addEventListener('click', e => editNewQuestion(e, id))
  el.lastChild.children[1].addEventListener('click', e => delQuestion(e, id))
  main.appendChild(el);
};

function createEl(elem, text, parent, className, placeholder, type) {
	let el = document.createElement(elem);
	el.innerText = `${text}`;
	el.className = className;
  el.placeholder = placeholder;
  el.type = type;
	parent.appendChild(el);
};
const initialize = () => {
  main.innerHTML = ''
  mainDb.forEach((item, index) => {createRow(index + 1, item.question, item.id )})
}

const showEditPage = () => {
	admin.style.display = 'initial';
	adminPage.innerHTML = '';
}
const hideEditPage = () => {
	admin.style.display = 'none';
}
const addNewQuestion = () => {
  editQuestion()
}
const editNewQuestion = (event, id) => {
  console.log ('  edit  ', id)
}
const delQuestion = (event, id) => {
  mainDb = [...mainDb].filter( item => item.id !== id)
  initialize()
}


const editQuestion = (item) => {
  let newItem = item;
  console.dir(item)
  let textH2 = 'Edit new question';
	if (!item) {
    textH2 = 'Add new question';
		newItem = {
			question: "add your question",
			answers: [
			  { value: "Answer", truth: false },
			  { value: "Answer", truth: false },
			  { value: "Answer", truth: false }
			]
		}
  }

	showEditPage()
	createEl('h2', textH2, adminPage, null, null)
  createEl('input', null, adminPage, null, newItem.question)
  createEl('button', 'Add answer field', adminPage, null, null)
  createEl('button', 'Del answer field', adminPage, null, null)
  createEl('br', null, adminPage)

  newItem.answers.forEach((element) => {
    createEl('input', null, adminPage, null, element.value)
    createEl('input', null, adminPage, null, null, 'checkbox')
    createEl('span', 'true', adminPage, null, null)
    
    createEl('br', null, adminPage)

  });
}
document.getElementById('btn-add').onclick = editQuestion;

initialize();
