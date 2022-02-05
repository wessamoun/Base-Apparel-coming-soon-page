
let form = document.getElementById("form");
let email = document.querySelector(".email");
let msg = document.querySelector(".validation");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;
email.addEventListener("keyup", function (e) {
  if (!email.value.match(pattern)) {
    form.classList.add("invalid");
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
    form.classList.remove("invalid");
  }
  if (email.value == "") {
    msg.style.display = "none";
    form.classList.remove("invalid");
  }
});
