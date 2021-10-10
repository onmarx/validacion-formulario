// Import stylesheets
import './style.css';

// Write Javascript code!

const form = document.getElementById('form')
const user = document.getElementById('user')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass')

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  validaCampo()
})

const validaCampo = () => {
  // capturar valores escritos por el usuario
  const userValue = user.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const confirmPassValue = confirmPass.value.trim()

  // comprobacion usuario
  if(!userValue){
    validaError(user, 'Campo vacio')
  }
  else {
    validaOk(user, 'correcto')
  }
  // validar email
  if(!emailValue){
    validaError(email, 'Campo vacio')
  } else if (!validaEmail(emailValue)){
    validaError(email, 'Email no valido')
  } else {
    validaOk(email)
  }
  // validar pasword
  const parameters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/   
  if(!passwordValue){
    validaError(password, 'Campo vacio')
  } else if(passwordValue.length < 8){
    validaError(password, 'Debe tener 8 caracteres como minimo')
  } else if(!passwordValue.match(parameters)) {
    validaError(password, 'Debe tener al menos una May, min y un num')
  } else {
    validaOk(password)
  }
  // validar confirmacion password
  if(!confirmPassValue){
    validaError(confirmPass, 'Campo vacio')
  } else if(passwordValue !== confirmPassValue){
    validaError(confirmPass, 'La password no coincide')
  } else {
    validaOk(confirmPass)
  }
  
}


// mostrar mensaje de error
function validaError (input, msg){
  const formControl = input.parentElement
  const aviso = formControl.querySelector('p')
  aviso.innerText = msg
  // setTimeout(()=>{
  //   aviso.innerText = ""
  // },1000)
  formControl.className = 'form-control error'
}

function validaOk (input, msg) {
  const formControl = input.parentElement
  formControl.className = 'form-control ok'
}

function validaEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

