'use strict';

const main = document.getElementById('main');
let db = {};

const registration = e => {
  e.preventDefault();

  for (let i in e.target.elements) {
    if (e.target.elements[i] && e.target.elements[i].nodeName === 'INPUT'){ 
      if (!e.target.elements[i].value) {
        toggleError(e.target.elements[i], 'Field is required')
      }
    }
  }
}

const validateName = item => {
  return item.length < 3 ? 'Name should contain minimum 3 signs' : null
}

const validateEmail = item => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !re.test(String(item).toLowerCase()) ? 'Your email is incorrect' : null
}

const validateDate = item => {
  let nowDate = new Date();
  let diff = nowDate.getFullYear() - Number(item.substr(0, 4));
  return diff < 18 ? 'You are too yung' : null
}

const toggleError = (input, text) => {
  if(text) {
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

const validatePassword = item => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return !re.test(String(item).toLowerCase()) ? 'Your password is incorrect' : null
}

const handleChange = input => {
  let { name, value } = input
  if (name === 'firstName' || 'lastName') {
    toggleError(input, validateName(value))
  }
  if (name === 'email') {
    toggleError(input, validateEmail(value))
  }
  if (name === 'date') {
    toggleError(input, validateDate(value))
  }
  if (name === 'password') {
    toggleError(input, validatePassword(value))
  }
  
  if (name === 'confirmPassword') {
    console.log(db, db['password'], value)
    toggleError(input, (db['password'] !== value) ? "Passwords don't match" : null)
  }
  db[name] = value
}

main.addEventListener("submit", registration)
