
const selectors = document.querySelector("#selectors");

  selectors.addEventListener("click", (event) => {

    const select = document.querySelectorAll(".select");

    select.forEach(button => button.style.background = "");

    if (event.target.style.background === "blue") {
      event.target.style.background = ""
    } else {
        event.target.style.background = "blue";
    }

  });
