const name = document.getElementById("name").value;
const surname = document.getElementById("surname").value;
const age = document.getElementById("age").value;
const email = document.getElementById("email").value;
const budget = document.getElementById("budget").value;

localStorage.clear();

localStorage.setItem("name", JSON.stringify(name));
localStorage.setItem("surname", JSON.stringify(surname));
localStorage.setItem("age", JSON.stringify(age));
localStorage.setItem("email", JSON.stringify(email));
localStorage.setItem("budget", JSON.stringify(budget));

const btn = document.getElementById("btn4");

btn.addEventListener("click", (e) => {
  window.alert("Form submitted succesfully");
});
