'use strict';
const mainDb = [
    ['div', 'Input your login', 'bold-text'],
    ['input', 'example@mail.com', 'input-field'],
    ['div', 'Input your password', 'bold-text'],
    ['input', 'password', 'input-field'],
    ['button', 'Log-In']
];
const main = document.getElementById('main');

const createElement = (elem, text, className) => {
    let el = document.createElement(elem);
    el.innerText = text;
    el.className = className;
    main.appendChild(el);
};
const createInput = (elem, text, className) => {
    let el = document.createElement(elem);
    el.placeholder = text;
    el.className = className;
    main.appendChild(el);
};

const initialize = () => {
    mainDb.forEach(item => {
        if (item[0] === 'input') {
            createInput(...item)
        } else {
        createElement(...item)
        }
    });
}

initialize()
