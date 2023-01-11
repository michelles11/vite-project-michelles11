import "../styles/style.css";
import { list } from "./list";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

console.log(list);

document.querySelector("#btn").addEventListener("click"), DOM;
function makeCards() {
  list.forEach((school) => {
    DOMSelectors.Display.insertAdjacentHTML(
      "beforeend"`<div class="card">
            <h2>${school.name}</h2>
            <img class="image" src="${school.image}" alt=""></div>`
    );
  });
}

makeCards();
