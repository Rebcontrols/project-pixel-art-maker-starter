let size = document.querySelector('sizePicker');
let changeColor = document.getElementById('#colorPicker');
let gridHeight = document.getElementById('#inputHeight');
let gridWidth = document.getElementById('#inputWidth');
let canvas = document.getElementById('#pixelCanvas');

 
//Make the Grid
function makeGrid(gridHeight, gridWidth) {
// Select size input
size.addEventListener("submit", function (event){
    event.preventDefault()
    makeGrid(gridHeight, gridWidth);
});

    canvas.innerHTML = "";
    //Loop through grid
    for (let x = 0; x <= gridHeight.height; x++){
        const gridRow = document.createElement('tr');
        canvas.appendChild('tr');
        for (let y = 0; y <= gridWidth.width; y++){ 
            const gridCell = document.createElement('td');
            canvas.appendChild('td');
        }

    }

canvas.addEventListener('click', function (event){
    if (event.target.nodeName ==="td") {
        event.target.style.backgroundColor = changeColor.color;
    }
});

    makeGrid.appendChild(gridHeight, gridWidth);
}
