import { content, createHtmlElement } from "./index";

const menu = [
  {
    name: "Pan canilla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
  {
    name: "Pan sobado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
  {
    name: "Pan Andino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "20$",
  },
];

function render() {
  const main = document.createElement("main");
  main.classList.add("main");

  const bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Bienvenidos"
  );
  const title = createHtmlElement("h1", null, ["gray"], "Menu");

  const hr = document.createElement("hr");

  main.appendChild(bienvenidos);
  main.appendChild(title);
  main.appendChild(hr);

  menu.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-item"], null);

    const name = createHtmlElement("h2", null, ["golden"], item.name);
    const description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const price = createHtmlElement("h2", null, ["golden"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
  });

  const men = createHtmlElement("object", null, null, null)
  men.setAttribute("type", "application/pdf")
  men.setAttribute("data","https://sushiwaveinc.com/wp-content/uploads/2022/07/Sushi-Wave-Menu-July-2022.pdf")
  men.setAttribute("width", "100%")
  men.setAttribute("height","100%")

  content.appendChild(men);
}

export { render as renderMenu };
