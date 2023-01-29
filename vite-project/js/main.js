import "../styles/style.css";
import { list } from "./list";
import { DOMSelectors } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(list);

DOMSelectors.red.addEventListener("click", function () {
  DOMSelectors.Display.innerHTML = "";
  list
    .filter((school) => school.color.includes("red"))
    .forEach((school) =>
      DOMSelectors.Display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2>${school.name}</h2>
            <img class="image" src="${school.image}" alt=""></div>`
      )
    );
});
DOMSelectors.blue.addEventListener("click", function () {
  DOMSelectors.Display.innerHTML = "";
  list
    .filter((school) => school.color.includes("blue"))
    .forEach((school) =>
      DOMSelectors.Display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2>${school.name}</h2>
            <img class="image" src="${school.image}" alt=""></div>`
      )
    );
});
DOMSelectors.green.addEventListener("click", function () {
  DOMSelectors.Display.innerHTML = "";
  list
    .filter((school) => school.color.includes("green"))
    .forEach((school) =>
      DOMSelectors.Display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2>${school.name}</h2>
            <img class="image" src="${school.image}" alt=""></div>`
      )
    );
});
DOMSelectors.orange.addEventListener("click"., function () {
  DOMSelectors.Display.innerHTML = "";
  list
    .filter((school) => school.color.includes("orange"))
    .forEach((school) =>
      DOMSelectors.Display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2>${school.name}</h2>
            <img class="image" src="${school.image}" alt=""></div>`
      )
    );
});

DOMSelectors.theme.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
