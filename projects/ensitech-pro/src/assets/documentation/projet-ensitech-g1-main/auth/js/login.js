
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper);
}


const loginBtn = document.getElementById("login_btn");

loginBtn.onclick = (e) => {
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");

const expectedEmail = localStorage.getItem('email');
const expectedPassword = localStorage.getItem('password');

if (emailInput.value == expectedEmail && passwordInput.value == expectedPassword) {
    localStorage.setItem('login_success', '1');

} else {
    appendAlert("L'authentification a échoué; veuillez reéssayer", 'danger');
    e.preventDefault();
}
}



const accountStatus = localStorage.getItem('account_create');

if (accountStatus == "1") {
localStorage.setItem('account_create', '-1');
    appendAlert("Compte créé avec succès !", 'success');
    
}