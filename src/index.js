import { renderNav } from "./navbar";
import { renderHome } from "./main-home";
import { renderFooter } from "./footer";
import { renderMenu } from "./main-menu";
import { renderAbout } from "./about";

const content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, contents) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (contents) element.innerText = contents;

  return element;
}

function home() {
  content.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
}
function menu() {
  content.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
}
function about() {
  content.innerHTML = "";
  renderNav();
  renderAbout();
  renderFooter();
}

home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME") home();
  if (target === "MENU" || target === "SEE MENU") menu();
  if (target === "ABOUT") about();
});
export { createHtmlElement, content };
