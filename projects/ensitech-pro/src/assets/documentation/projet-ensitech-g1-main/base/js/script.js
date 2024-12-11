const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const loginStatus = localStorage.getItem("login_success");

if (loginStatus == "1") {
  localStorage.setItem("login_success", "-1");
  appendAlert("Connexion éffectuée avec succès !", "success");
} else if (!loginStatus || loginStatus == "0") {
  window.location.href = "../auth/login.html";
}

const user_name_span = document.getElementById("user_name_span");
const first_name = localStorage.getItem("first_name");
const last_name = localStorage.getItem("last_name");

user_name_span.innerText = `${last_name} ${first_name}`;
