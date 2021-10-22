"use strict";

const formBtn = document.querySelector(".btn");
const inputField = document.querySelector(".inputfield");
const errorMsg = document.querySelector(".error-msg");
console.log(formBtn);

const errorColor = "hsl(354, 100%, 66%)";

formBtn.addEventListener("click", function (e) {
  if (inputField.value === "" || !inputField.value.includes("@")) {
    e.preventDefault();
    inputField.style.borderColor = errorColor;
    errorMsg.classList.remove("hide");
  } else e;
});
