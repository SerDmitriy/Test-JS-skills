'use strict';

const main = document.getElementById('main');
let db = {};

const registration = e => {
  e.preventDefault();
  console.dir(e)
  for (let i in e.target) {
    if (i.localName === 'input'){ console.dir(i.value) }
  }

  //check fields on epmty
  //password compare
}

const validateName = item => {
  return item.length < 3 ? 'Name should contain minimum 3 signs' : null
}

const validateEmail = item => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(item).toLowerCase()) ? 'Your email is incorrect' : null
}

const validateDate = item => {
  let nowDate = new Date();
  console.log(nowDate)
  console.log(item)
  let diff = nowDate.getFullYear() - item.getFullYear();
  return diff < 18 ? 'You are too yung' : null
}

const toggleErrMsgField = () => {}

const validatePassword = item => {
  return item.length < 8 ? 'Password should contain minimum 8 signs' : null
}

const handleChange = input => {
  let { name, value } = input
  // console.dir(input)
  if (name === 'firstName' || 'lastName') {
    const errorNameMsg = validateName(value)
    if(errorNameMsg) {


      const el = input.nextElementSibling
      el.removeAttribute("style")

      console.log('el', el)

      // input.nextElementSibling.removeAttribute('hidden')
      // input.nextElementSibling.innerText = errorNameMsg
      // input.setAttribute('class', 'error') 
      
      // console.dir(input)
      // console.dir(input.className)

      // if (input.className.indexOf(' error') < 0) {
      //   input.className += ' error'   
      // }
    } else {
      // input.className = input.className.replace(' error', '')
      // input.nextElementSibling.hidden = 'true'
    }
  }
  // if (name === 'email') {
  //   const errorEmailMsg = validateEmail(value)
  //   if (errorEmailMsg) {
  //     input.nextElementSibling.hidden = false
  //     input.nextElementSibling.innerText = errorEmailMsg
  //     input.className += ' error'   
  //   } else {
  //     input.className = input.className.replace(' error', '')
  //     input.nextElementSibling.hidden = true
  //   }
  // }
  // if (name === 'date') {
  //   const errorDateMsg = validateDate(value)
  //   if (errorDateMsg) {
  //     input.nextElementSibling.hidden = false
  //     input.nextElementSibling.innerText = errorDateMsg
  //     input.className += ' error'   
  //   } else {
  //     input.className = input.className.replace(' error', '')
  //     input.nextElementSibling.hidden = true
  //   }
  // }
  //if (name === 'password' || 'confirmPassword' &&  !errorPasswordMsg) {
  // if (name === 'password' || 'confirmPassword') {
  //   const errorPasswordMsg = validatePassword(value)
  //   if (!errorPasswordMsg) {
  //     input.nextElementSibling.hidden = false
  //     input.nextElementSibling.innerText = errorPasswordMsg
  //     input.className += ' error'
  //   } else {
  //     input.className = input.className.replace(' error', '')
  //     input.nextElementSibling.hidden = true
  //   } 
  // }
  db[name] = value
}

main.addEventListener("submit", registration)
