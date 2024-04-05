const ulElem = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.addEventListener("click", response);


const li = document.createElement("li");
const span = document.createElement("span");
const btnDel = document.createElement("button");

li.appendChild(span);
li.appendChild(btnDel);

function response(){
  let inputResp = input;
  input.textContent = ""
}