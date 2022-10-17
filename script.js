let grid = document.querySelector("#grid-container");

function createGrid(col, row) {
    col = col * row;
    for(i = 0; i < col; i++){
         let gridItem = document.createElement('div');
         grid.appendChild(gridItem);
         gridItem.className = 'grid-item';
        //  gridItem.innerText = i + 1;
    }
}

createGrid(16, 16);
