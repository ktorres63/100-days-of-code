const ulElem = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let inputText = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnDel = document.createElement("button");

  li.appendChild(span);
  li.textContent = inputText;
  li.appendChild(btnDel);
  btnDel.textContent = "Delete";
  ulElem.appendChild(li);

  btnDel.addEventListener("click", ()=> {
    ulElem.removeChild(li);
  });
  input.focus();


});

