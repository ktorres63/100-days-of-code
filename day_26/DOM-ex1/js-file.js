// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.setAttribute("style", "color: red;");
para.textContent = "Hey I’m red!";

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: blue;");
h3.textContent = "Hey I’m blue!";




container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);

const content2 = document.createElement("div");
content2.classList.add("second-content");
content2.setAttribute("style", "border: 1px solid black;background-color:pink");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

content2.appendChild(h1)
content2.appendChild(para2)


document.body.appendChild(content2)