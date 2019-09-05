'use strict';

const main = document.getElementById('main');
const email = document.getElementById('email');
const password = document.getElementById('password');
let db = {}


const toggleError = (input, text) => {
  if (text) {
    input.nextElementSibling.removeAttribute('hidden')
    input.nextElementSibling.innerText = text
    if (input.className.indexOf(' error') === -1) {
      input.className += ' error'
    }
  } else {
    input.className = input.className.replace(' error', '')
    input.nextElementSibling.setAttribute('hidden', true)
  }
}

const logIn = (e) => {
  e.preventDefault();
  for (let i in e.target.elements) {
    if (e.target.elements[i] && e.target.elements[i].nodeName === 'INPUT') {
      if (!e.target.elements[i].value) {
        toggleError(e.target.elements[i], 'Field is required')
      }
    }
  }
  console.dir(db);
  sessionStorage.setItem('password', db.password);
  sessionStorage.setItem('email', db.email);
}

const validateEmail = item => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !re.test(String(item).toLowerCase()) ? 'Your email is incorrect' : null
}
const validatePassword = item => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return !re.test(String(item).toLowerCase()) ? 'Your password is incorrect' : null
}
const handleChange = input => {
  let { name, value } = input
  if (name === 'email') {
    toggleError(input, validateEmail(value))
  }

  if (name === 'password') {
    toggleError(input, validatePassword(value))
  }

  db[name] = value
}

main.addEventListener("submit", logIn)


