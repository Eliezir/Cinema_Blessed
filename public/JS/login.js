const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.entrar');
const password_icon = document.querySelector(".password__visible");
const visibility_icon = document.querySelector(".visibility");
const password_label = document.querySelector("#password");



const handleFocus = ({target}) => {
  if(target.type==="button"){
    target = inputs[1]}
  const span = target.parentElement.firstElementChild;
  span.classList.add('span-active');  
  if(target.id == "senha"){
    password_icon.classList.add('password__visible-active')
  }
}

const handleFocusOut = ({target}) => {
  if(target.type==="button"){
    target = inputs[1]}
  else if(target.value ===''){
    const span = target.parentElement.firstElementChild;
    span.classList.remove('span-active');}
      
}

document.querySelector("body").addEventListener('click',function(e){
  var fora = !password_label.contains(e.target);
    if(fora && inputs[1].type != 'text' ){
      password_icon.classList.remove('password__visible-active')
    }
    if(fora && inputs[1].value === '' ){
        document.getElementById('span-senha').classList.remove('span-active');
    }
})


const handleChange = () => {
  const[username , password] = inputs;

if(username.value.length >= 3 && password.value.length >= 3){
  button.removeAttribute('disabled')
}
else{
  button.setAttribute('disabled','')
}
}

var password = true;


password_icon.addEventListener('click', function() {
  if (password) {
    inputs[1].setAttribute('type', 'text');
    visibility_icon.innerHTML = 'visibility';
  } else {
    inputs[1].setAttribute('type', 'password');
    visibility_icon.innerHTML = 'visibility_off';
  }
  password = !password;
  
});

inputs.forEach((input) => input.addEventListener('focus',handleFocus));
inputs.forEach((input) => input.addEventListener('focusout',handleFocusOut));
password_icon.addEventListener('focus',handleFocus)
password_icon.addEventListener('focusout',handleFocusOut)
inputs.forEach((input) => input.addEventListener('input',handleChange));