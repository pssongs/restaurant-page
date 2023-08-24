import { content, createHtmlElement } from "./index";

function render() {
  const main = document.createElement("main");

  const title = createHtmlElement("h1", null, ["white", "title"], "Hong Sushi N Ramen");

  const hr = document.createElement("hr");
  const subtitle = createHtmlElement(
    "p",
    null,
    ["text-center", "white"],
    "Best Sushi in Town"
  );
  const button = createHtmlElement("button", null, null, "See menu");

  main.appendChild(title);
  main.appendChild(hr);
  main.appendChild(subtitle);
  main.appendChild(button);

  content.appendChild(main);
}

export { render as renderHome };
