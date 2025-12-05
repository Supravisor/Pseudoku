
// puzzle
const keypad = document.querySelectorAll("#puzzle button");
const puzzle = document.getElementById("puzzle");

let selected = " ";

  puzzle.addEventListener("click", (event) => {

    if (selected === " ") {
      event.target.innerHTML = `&nbsp;`;
    } else {
        event.target.innerHTML = selected;
    }

  });

// selectors
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

// check for Win
const checkForWin = () => {

  let quadrantA = Number(keypad[4].innerText) + Number(keypad[5].innerText) + Number(keypad[6].innerText) + Number(keypad[7].innerText);
  let quadrantB = Number(keypad[0].innerText) + Number(keypad[1].innerText) + Number(keypad[2].innerText) + Number(keypad[3].innerText);

}
