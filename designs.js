// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//The user can create a canvas of any (reasonable) size.
//The user can color the pixels in the grid.
//The user can reset the grid to a blank state.
//The script.js JavaScript code works with the provided HTML and CSS files.
//Code is neatly formatted and commented.
//Code runs without errors in the JavaScript console.

const sizePicker = document.querySelector(".sizePicker");
const canvas = document.getElementById("pixelCanvas");
const gridBtn = document.getElementById("submit");


// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(row, column) {
    sizePicker.addEventListener('submit', function (canvas){
        // 1. We get the reference where we should place the table
        event.preventDefault();
        // 2. We get the sizes of our inputs
        let gridHeight = document.querySelector("inputHeight").value();
        let gridWidth = document.querySelector("#inputWidth").value();
        // 3. We create a new empty table on the reference we get on step 1 
        makeGrid(gridheight, gridWidth);

    // 4. We do a loop to create a new <tr> (row) for each number on our height input
    for (var x = 1; x <= row - 1; x++) {
        let gridRow = document.createElement("tr");
	pixelCanvas.append(gridRow);
        // 5. We do a loop, inside the loop of step 4, to create a new column <td> for each number on the input width
        for (var y = 0; y <= column - 1; y++) {  
        let gridCell = document.createElement("td");
	gridCell.append(gridCell);  
        }
    }
    // Select color input
function() {
    let color = document.querySelector("color-picker").value();
        this.style.backgroundColor = color;
        }
     })
}
