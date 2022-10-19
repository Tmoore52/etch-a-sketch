let grid = document.querySelector("#grid-container");
let button = document.querySelector(".button");
col = 16;
row = col;
// creates grid based on col and row multiplied by each other

function createGrid(col, row) {
  col = col * row;
  for (i = 0; i < col; i++) {
    gridItem = document.createElement("div");
    grid.appendChild(gridItem).className = `grid-item ${i + 1}`;
    gridItem.addEventListener("mouseenter", colorChange);
  }
  button.addEventListener("click", squareChange);
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(col, row);

function colorChange(e) {
  console.log("EVENT TYPE:" + e.type);
  e.target.style.backgroundColor = randomColor();
}

function squareChange() {
  let col = prompt("Enter how squares per side you'd like up to 100");
  if (col > 100 || col < 1) {
    alert("Number too high or low. Please try again and enter a number between 1 and 100.");
  }
  row = col;
  console.log(col);
  console.log(row);
};

