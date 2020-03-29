

const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password-check')

form.addEventListener('submit',(e)=>{
      e.preventDefault()

      checkInputs();

})


function checkInputs(){
 
 const userNameValue = userName.value.trim()
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 const password2Value = password2.value.trim()

  if(userNameValue === ''){
   // show error
   // add error class
    setErrorFor(username, 'User cannot be blank!')
  }else{
    setSuccessFor(username)
  }
  if(emailValue === ''){
    setErrorFor(email, 'Email cannot be blank')
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is NOT vaild')
  }else{
    setSuccessFor(email)
  }
  if(passwordValue === ''){
    setErrorFor(password, 'password cannot be blank!')
  }else{
    setSuccessFor(password)
  }
  if(password2Value === ''){
    setErrorFor(password2, 'password check cannot be blank!')
  }else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Passwords do NOT match! ')
  }
  else{
    setSuccessFor(password2)
  }
}

function setErrorFor(input,message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control err'
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control sux'

}

function isEmail(email){
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
