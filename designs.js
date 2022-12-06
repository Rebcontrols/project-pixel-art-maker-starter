let sizePick = document.getElementById('sizePicker');
let gridColor = document.querySelectorAll('addListener');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let canvas = document.getElementById('pixelCanvas');

function makeGrid(height, width)
{
    for (let x = 0; x < height.value; x++)
    {
        const gridRow = document.createElement('tr');
        canvas.appendChild(gridRow); 
        for (let y = 0; y < width.value; y++)
        { 
            const gridCell = document.createElement('td');
            canvas.appendChild(gridCell);
         }
     }
}
sizePick.addEventListener('submit', function (event)
{
    makeGrid(height, width)
    event.preventDefault();
})

//makeGrid(height, width)

function addListener()
{
    for(var cell of cells)
    {
        cell.addEventListener('click', c=>
        {
            c.target.style.backgroundColor
        });
     }
}
