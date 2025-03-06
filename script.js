//Etch-a-Sketch
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('hover')

    container.appendChild(square);
}

const hover = document.getElementsByClassName('hover');

for (let i = 0; i < hover.length; i++)
    hover[i].addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'gray';
})


