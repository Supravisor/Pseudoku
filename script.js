
// puzzle
const keypad = document.querySelectorAll("#puzzle button");
const puzzle = document.getElementById("puzzle");

let selected = " ";
let isGameWon = false;

let random = (arr) => Math.floor(Math.random(arr.length) * 3);

let random1;
let random2;
let random3;
let random4;

let today = new Date().getDate();

const setGrid = (arr) => {
  random1 = arr.splice(random(arr), 1);
  random2 = arr.splice(random(arr), 1);
  random3 = arr[0];
  random4 = arr[1];
}

  if (today % 14 === 0) {
    setGrid([4, 3, 2, 1]);
    keypad[0].innerText = random1;
    keypad[2].innerText = random2;
    keypad[4].innerText = random3;
    keypad[6].innerText = random4;
  }

  if (today % 14 === 1) {
    setGrid([4, 1, 3, 2]);
    keypad[3].innerText = random1;
    keypad[12].innerText = random1;
  }

  if (today % 14 === 2) {
    setGrid([3, 4, 1, 2]);
    keypad[9].innerText = random1;
    keypad[10].innerText = random2;
    keypad[13].innerText = random2;
    keypad[6].innerText = random4;
  }

  if (today % 14 === 3) {
    setGrid([ 3, 2, 1, 4]);
    keypad[0].innerText = random1;
    keypad[2].innerText = random2;
    keypad[4].innerText = random3;
    keypad[6].innerText = random4;

    keypad[8].innerText = random2;
    keypad[10].innerText = random1;
    keypad[12].innerText = random4;
    keypad[14].innerText = random3;
  }

  if (today % 14 === 4) {
    setGrid([1, 2, 4, 3]);
    keypad[0].innerText = random1;
    keypad[7].innerText = random2;
    keypad[13].innerText = random3;
    keypad[15].innerText = random4;
  }

  if (today % 14 === 5) {
    setGrid([3, 4, 2, 1]);
    keypad[1].innerText = random1;
    keypad[8].innerText = random2;
    keypad[4].innerText = random2;
    keypad[6].innerText = random1;
  }

  if (today % 14 === 6) {
    setGrid([4, 3, 2, 1]);
    keypad[3].innerText = random1;
    keypad[5].innerText = random2;
    keypad[9].innerText = random1;
    keypad[6].innerText = random4;
  }

  if (today % 14 === 7) {
    setGrid([4, 2, 1, 3]);
    keypad[0].innerText = random1;
    keypad[6].innerText = random2;
    keypad[9].innerText = random3;
    keypad[15].innerText = random4;
  }

  if (today % 14 === 8) {
    setGrid([1, 3, 4, 2]);
    keypad[1].innerText = random1;
    keypad[3].innerText = random2;
    keypad[9].innerText = random3;
    keypad[12].innerText = random4;
  }


  if (today % 14 === 9) {
    setGrid([1, 2, 3, 4]);
    keypad[0].innerText = random1;
    keypad[3].innerText = random2;
    keypad[12].innerText = random3;
    keypad[15].innerText = random4;
  }

  if (today % 14 === 10) {
    setGrid([2, 3, 4 ,1]);
    keypad[4].innerText = random1;
    keypad[8].innerText = random1;
    keypad[6].innerText = random4;
  }

  if (today % 14 === 11) {
    setGrid([2, 3, 4, 1]);
    keypad[12].innerText = random1;
    keypad[13].innerText = random2;
    keypad[14].innerText = random3;
    keypad[15].innerText = random4;
  }

  if (today % 14 === 12) {
    setGrid([4, 1, 2, 3]);
    keypad[0].innerText = random1;
    keypad[5].innerText = random2;
    keypad[9].innerText = random2;
    keypad[15].innerText = random1;
  }

  if (today % 14 === 13) {
    setGrid([3, 1, 2, 4]);
    keypad[5].innerText = random2;
    keypad[10].innerText = random2;
    keypad[11].innerText = random3;
  }

  if (today % 14 === 14) {
    setGrid([3, 1, 4, 2]);
    keypad[7].innerText = random1;
    keypad[9].innerText = random2;
    keypad[12].innerText = random1;
    keypad[6].innerText = random4;
  }

  puzzle.addEventListener("click", (event) => {

    if (isGameWon) {
      return;
    }

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

    if (event.target.innerText.length > 1) {
      return;
    }

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

    isGameWon = true;
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

    setTimeout(() => {
      keypad[1].innerText = "W";
    }, 5000);

    setTimeout(() => {
      keypad[3].innerText = "O";
    }, 6000);

    setTimeout(() => {
      keypad[5].innerText = "N";
    }, 7000);

    setTimeout(() => {
      keypad[7].innerText = " ";
    }, 8000);

  }

}
