//The user can create a canvas of any (reasonable) size.
//The user can color the pixels in the grid.
//The user can reset the grid to a blank state.
//The script.js JavaScript code works with the provided HTML and CSS files.
//Code is neatly formatted and commented.
//Code runs without errors in the JavaScript console.

let size = document.querySelector(".sizePicker");
let canvas = document.getElementById("pixelCanvas");

// Select size input
sizePicker.addEventListener('click', function (makeGrid){
        // 1. We get the reference where we should place the table
        event.preventDefault();
        // 2. We get the sizes of our inputs
        let gridHeight = document.querySelector("inputHeight");
        let gridWidth = document.querySelector("inputWidth");
        // 3. We create a new empty table on the reference we get on step 1 
        makeGrid(gridHeight, gridWidth);

// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight, gridWidth) {

    // 4. We do a loop to create a new <tr> (row) for each number on our height input
    for (let x = 1; x <= gridHeight - 1; x++) {
        const gridRow = document.createElement("tr");
	    gridcanvas.append(gridRow);
        // 5. We do a loop, inside the loop of step 4, to create a new column <td> for each number on the input width
        for (let y = 0; y <= gridWidth - 1; y++) {  
        const gridCell = document.createElement("td");
	    gridCell.append(gridCell);  
        }
    }
    // Select color input
    function addColor (event) {
        var color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color;
        event.preventDefault();
     };
     grid.addEventListener("click", addColor);
}
});
