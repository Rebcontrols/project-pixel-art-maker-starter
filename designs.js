let sizePick = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let canvas = document.getElementById('pixelCanvas');

//Make a grid of any size with colour clicking per cell
function makeGrid(height, width)
{
    for (let x = 0; x < height.value; x++)
    {
        const gridRow = document.createElement('tr');
         
        for (let y = 0; y < width.value; y++)
        { 
            const gridCell = document.createElement('td');
            gridRow.appendChild(gridCell);
         }
         canvas.appendChild(gridRow);
     }
}
sizePick.addEventListener('submit', function (event)
{
    canvas.innerHTML = '';
    makeGrid(height, width)
    event.preventDefault();
    canvas.addEventListener('click', function(event)
    {
        const colorPicker = document.getElementById('colorPicker');
        event.target.style.backgroundColor = colorPicker.value
    })
})
