const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dim = document.getElementById("dim");
const submitBtn = document.getElementById("submitBtn");
const idInput = document.getElementById("idInput");
const loginPop = document.querySelector(".loginPop");

//[[[ login switch function ]]]//
const loginSwitch = (() => {
  let state = false;

  return function () {
    state = !state;
    if (state) loginPop.classList.remove("loginPop--off");
    else loginPop.classList.add("loginPop--off");
  };
})();

loginBtn.addEventListener("click", () => loginSwitch());
dim.addEventListener("click", () => loginSwitch());

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const idValue = idInput.value;

  if (idValue.trim() === "") return alert("다시 써");

  loginBtn.style.display = "none";
  logoutBtn.style.display = "block";

  loginSwitch();
  localStorage.setItem("id", idValue);
  idInput.value = "";
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("id");

  loginBtn.style.display = "block";
  logoutBtn.style.display = "none";
});
