/*
QuerySelector
getElementbyId
Getelementsbyclassname
*/
const mainHeading = document.getElementById("main");
// const mainHeading = document.querySelector("#main");
const divContainer = document.querySelector(".container");
// // const mainParagraph = document.getElementsByClassName("p_body");
const mainParagraph = document.querySelector(".p_body");
// console.log(mainHeading.textContent);
// console.log(mainParagraph);
// console.log(btn);

// divContainer.innerHTML = `
// <h1>This is from JS</h1>
// <p>This is also from JS</p>`;
const body = document.querySelector("body");
const inputField = document.querySelector("input");
const btn = document.querySelector("button");
const backBtn = document.querySelector(".bg_change");
const user = {
  name: "John",
  age: 20,
  gender: "Male",
};

btn.addEventListener("click", function () {
  console.log(user[inputField.value]);
});

backBtn.addEventListener("click", function () {
  mainHeading.style.color = "red";
  mainHeading.style.margin = "50px";
  mainParagraph.style.backgroundColor = "green";
  body.style.backgroundColor = "cyan";
});

inputField.addEventListener("input", function (e) {
  console.log(e.target.value);
});

const pEl = document.createElement("p");
pEl.textContent = "This is also from JS";
pEl.className = "pEl_body pEl_main";
// console.log(pEl);
// body.appendChild(pEl);
