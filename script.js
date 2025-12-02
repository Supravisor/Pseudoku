
const keypad = document.querySelector("#puzzle");

let selected = " ";

  keypad.addEventListener("click", (event) => {

    if (selected === " ") {
      event.target.innerHTML = `&nbsp;`;
    } else {
        event.target.innerHTML = selected;
    }

  });

const selectors = document.querySelector("#selectors");

  selectors.addEventListener("click", (event) => {

    if (event.target.style.background === "blue") {
      selected = " ";
      return event.target.style.background = "";
    }

    const select = document.querySelectorAll(".select");

    select.forEach(button => button.style.background = "");

    if (event.target.style.background === "") {
      selected = event.target.innerText;
      event.target.style.background = "blue";
    } else {
        selected = " ";
        event.target.style.background = "";
    }

  });
