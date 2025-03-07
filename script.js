//Etch-a-Sketch
const container = document.querySelector('.container');
container.style.width = '600' + 'px';
container.style.height = container.style.width;

const inputBtn = document.querySelector('#input');
inputBtn.addEventListener('click', () => {
    numOfSq = prompt('Input');
    if (numOfSq > 100) {
        alert('Not a valid choice');
    }
    else {
        updateGrid();
        createGrid(numOfSq);
    }
})




function updateGrid() {
    container.innerHTML = '';
}

function createGrid(size = 16) {
    for (let i = 0; i < (size**2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('hover');

        areaTtl = (Number(container.style.width.slice(0,3)))**2;
        areaSq = areaTtl/(size**2);
        lenSq = Math.sqrt(areaSq);

        square.style.boxSizing = 'border-box';
        square.style.width = lenSq.toString() + 'px';
        square.style.height = lenSq.toString() + 'px';

        container.appendChild(square);
    }
    const hover = document.getElementsByClassName('hover');
    const reset = document.querySelector('#reset');


    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'gray';
    });
    }

    reset.addEventListener('click', () => {
        for (let i = 0; i < hover.length; i++)
            hover[i].style.backgroundColor = 'white';
    })

}


createGrid(16);



