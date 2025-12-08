
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

    checkForWin();

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
  let quadrantC = Number(keypad[8].innerText) + Number(keypad[9].innerText) + Number(keypad[10].innerText) + Number(keypad[11].innerText);
  let quadrantD = Number(keypad[12].innerText) + Number(keypad[13].innerText) + Number(keypad[14].innerText) + Number(keypad[15].innerText);

  let isQuadrantTrue = false;

  if (quadrantA === 10 && quadrantB === 10 && quadrantC === 10 && quadrantD === 10) {
    isQuadrantTrue = true;
  }

  let rowA = Number(keypad[0].innerText) + Number(keypad[2].innerText)+ Number(keypad[4].innerText) + Number(keypad[6].innerText);
  let rowB = Number(keypad[1].innerText) + Number(keypad[3].innerText) + Number(keypad[5].innerText) + Number(keypad[7].innerText);
  let rowC = Number(keypad[8].innerText) + Number(keypad[10].innerText) + Number(keypad[12].innerText) + Number(keypad[14].innerText);
  let rowD = Number(keypad[9].innerText) + Number(keypad[11].innerText) + Number(keypad[13].innerText) + Number(keypad[15].innerText);

  let isRowTrue = false;

  if (rowA === 10 && rowB === 10 && rowC === 10 && rowD === 10) {
    isRowTrue = true;
  }

  let columnA = Number(keypad[0].innerText) + Number(keypad[1].innerText) + Number(keypad[8].innerText) + Number(keypad[9].innerText);
  let columnB = Number(keypad[2].innerText) + Number(keypad[3].innerText) + Number(keypad[10].innerText) + Number(keypad[11].innerText);
  let columnC = Number(keypad[4].innerText) + Number(keypad[5].innerText) + Number(keypad[12].innerText) + Number(keypad[13].innerText);
  let columnD = Number(keypad[6].innerText) + Number(keypad[7].innerText) + Number(keypad[14].innerText) + Number(keypad[15].innerText);

  let isColumnTrue = false;

  if (columnA === 10 && columnB === 10 && columnC === 10 && columnD === 10) {
    isColumnTrue = true;
  }

  if (isQuadrantTrue === true && isRowTrue === true && isColumnTrue === true) {

    keypad.forEach(button => button.innerText = " ");

    setTimeout(() => {
      keypad[0].innerText = "Y";
    }, 1000);

    setTimeout(() => {
      keypad[2].innerText = "O";
    }, 2000);

    setTimeout(() => {
      keypad[4].innerText = "U";
    }, 3000);

    setTimeout(() => {
      keypad[6].innerText = " ";
    }, 4000);


  }

}
