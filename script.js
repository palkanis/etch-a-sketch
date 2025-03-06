//Etch-a-Sketch
const container = document.querySelector('.container');
container.style.width = '600' + 'px';
container.style.height = container.style.width;

const numOfSq = prompt('Input grid pattern:');


for (let i = 0; i < (numOfSq**2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('hover');

    areaTtl = (Number(container.style.width.slice(0,3)))**2;
    areaSq = areaTtl/(numOfSq**2);
    lenSq = Math.sqrt(areaSq);

    square.style.boxSizing = 'border-box';
    square.style.width = lenSq.toString() + 'px';
    square.style.height = lenSq.toString() + 'px';

    container.appendChild(square);
}


const hover = document.getElementsByClassName('hover');

for (let i = 0; i < hover.length; i++)
    hover[i].addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'gray';
})


