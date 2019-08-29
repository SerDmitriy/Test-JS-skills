'use strict';
const mainDb = [
  ['div', 'Registration form', 'text-primary', null],
  ['input', 'First name', 'text-info', 'firstName'],
  ['input', 'Last name', 'input-field', 'lastName'],
  ['input', 'Email', 'input-field', 'email'],
  ['input', 'Password', 'password', 'password'],
  ['input', 'Confirm Password', 'password', 'passwordComfirm'],
  ['button', 'Register', 'button' ,'registration']
];
const main = document.getElementById('main');

const createElement = (elem, text, className, id) => {
  let el = document.createElement(elem);
  el.id = id;
  el.className = className;
  if (elem === 'div' || 'button') {el.innerText = text}
  if (elem === 'input') {
    el.className += ' text-info';
    el.placeholder = text;
      el.style.display = 'block';
  }
  if (className === 'password' || 'button') {
    el.type = className;
    if (className === 'button') {
      el.className += ' btn btn-success btn-md'
      el.type = 'submit'
    }
  }
  main.appendChild(el);
};

const registration = e => {
  e.preventDefault();

  let a = [];
  console.log('registration text ');
  mainDb.forEach( item => {
    if (item[0] === 'input') {a.push(document.getElementById(item[3]).value)};
    console.log(document.getElementById(item[3]).value);
    return
  });
  if (password.value != passwordComfirm.value) {alert ('Passwords not the same')}
};

const initialize = () => {
  mainDb.forEach(item => createElement(...item));
  // document.getElementById('registration').onClick = registration;
}

initialize();
main.addEventListener("submit", registration)
