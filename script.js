// Importerar login knapp på Hero section samt login modal & krysset för att stänga ner
const heroBtn = document.getElementById("heroLoginBtn");
const secondBtn = document.getElementById("heroSecondBtn");
const loginPopup = document.getElementById("loginPopup");
const loginExit = document.getElementById("loginExit");

// Form Content
let nameInput = document.getElementById("nameInput");
let passwordInput = document.getElementById("passwordInput");
let submitBtn = document.getElementById("submitBtn");
const errorLogin = document.getElementById("errorLogin");

let loggedInVal = localStorage.getItem("LoggedIn");

// Login Name & Pass
let setName = "sara";
let setPass = "qwe123";

// Kollar om man är inloggad
if (loggedInVal === "sara") {
  loginPopup.style.display = "none";
  localStorage.setItem("loginPopup", "false");
  heroBtn.innerText = "Logout";
  secondBtn.innerText = `View ${setName}'s Profile`;
} else {
  localStorage.removeItem("LoggedIn");
  heroBtn.innerText = "Login";
  secondBtn.innerText = `Join Now`;
}

// Öppnar en localStorage bara för att se ifall Login Modal ska visas eller inte
let showModal = localStorage.getItem("loginPopup");

if (showModal === "true") {
  loginPopup.style.display = "block";
} else {
  loginPopup.style.display = "none";
}

// Lyssna efter "click" på login knappen
heroBtn.addEventListener("click", () => {
  // Om första hero knappen har "login" som text ska den fungera som "vanligt"
  if (heroBtn.innerText === "Login") {
    localStorage.setItem("loginPopup", "true");
    loginPopup.style.display = "block";
  } else {
    // Om knappen ej har "login" så kommer den istället trigga "logout" funktion
    errorLogin.style.display = "none";
    localStorage.removeItem("LoggedIn");
    heroBtn.innerText = "Login";
    secondBtn.innerText = `Join Now`;
  }
});

// När man klickar på krysset stängs modal ner
loginExit.addEventListener("click", () => {
  localStorage.setItem("loginPopup", "false");
  loginPopup.style.display = "none";
});

//  OnSubmit event kollar ifall namn & lösenord stämmer överrens
const loginEvent = () => {
  let nameValue = nameInput.value;
  let passValue = passwordInput.value;

  // Ifall namn och lösenord stämmer överrens sker en del ändringar
  if (nameValue.toLowerCase() === setName && passValue === setPass) {
    // Sparar session i localstorage
    localStorage.setItem("LoggedIn", setName);

    // Ändrar så att Login Popup ej ska visas längre
    loginPopup.style.display = "none";
    localStorage.setItem("loginPopup", "false");

    // Ändrar text på hero knappar
    heroBtn.innerText = "Logout";
    secondBtn.innerText = `View ${setName}'s Profile`;
  } else {
    errorLogin.style.display = "block";
  }
};
