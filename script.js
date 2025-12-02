
const keypad = document.querySelector("#puzzle");

  keypad.addEventListener("click", (event) => {
    event.target.innerText = "a"
  });

const selectors = document.querySelector("#selectors");

  selectors.addEventListener("click", (event) => {

    if (event.target.style.background === "blue") {
      return event.target.style.background = "";
    }

    const select = document.querySelectorAll(".select");

    select.forEach(button => button.style.background = "");

    if (event.target.style.background === "blue") {
      event.target.style.background = ""
    } else {
        event.target.style.background = "blue";
    }

  });
