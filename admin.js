'use strict';

const main = document.getElementById('questionList');

const createRow = (number, question) => {
	let el = document.createElement('div');
	el.className = 'row';
	el.innerHTML = `
	<div class="heiger">Questions list</div>
	<div class="question-list__text">${number}. ${question}</div>
	<div class="btn-wrapper"> 
	  <button class="question-list__edit">Edit</button>
	  <button class="question-list__del">X</button>
	</div>`;
	main.appendChild(el);
};

const initialize = () => {
	createRow(3, 'text third question');
}

initialize();
