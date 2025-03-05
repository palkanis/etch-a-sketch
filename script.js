//Etch-a-Sketch
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const sqaure = document.createElement('div');
    sqaure.classList.add('square')

    container.appendChild(sqaure);
}