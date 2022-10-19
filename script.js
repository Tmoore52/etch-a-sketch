let grid = document.querySelector("#grid-container");
// creates grid based on col and row multiplied by each other

function createGrid(col, row) {
  col = col * row;
  for (i = 0; i < col; i++) {
    gridItem = document.createElement("div");
    grid.appendChild(gridItem).className = 'grid-item';
    gridItem.addEventListener("mouseenter", colorChange);
  }
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(16,16);

function colorChange(e) {
  console.log("EVENT TYPE:" + e.type);
  e.target.style.backgroundColor = randomColor();
}
