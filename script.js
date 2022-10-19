let grid = document.getElementById("grid-container");
let button = document.querySelector(".button");
let clear = document.querySelector(".clear");
let gridItem = document.querySelectorAll(".grid-item")
let col
let row

// creates grid based on col and row multiplied by each other

function createGrid(col, row) {
  col = col * row;
  for (i = 0; i < col; i++) {
    div = document.createElement("div");
    grid.appendChild(div).className = `grid-item`;
    div.addEventListener("mouseenter", colorChange);
  }
  button.addEventListener("click", squareChange);
  clear.addEventListener("click", clearGrid )
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(16, 16);

function colorChange(e) {
  console.log("EVENT TYPE:" + e.type);
  e.target.style.backgroundColor = randomColor();
}

function squareChange() {
  let col = prompt("Enter how squares per side you'd like up to 100");
  if (col > 100 || col < 1) {
    return alert(
      "Number too high or low. Please try again and enter a number between 1 and 100."
    );
  }
  row = col;
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  grid.style = "grid-template-columns: repeat(" + col + ", 1fr);";
  console.log(col);
  console.log(row);
  createGrid(col, row);
}

// function clearGrid() {
//   console.log("Test")
//   gridItem.forEach(item => {
//     item.style.backgroundColor = "white"
//   })
// }