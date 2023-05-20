createTiles(320);

function createTiles(n) {
    const section = document.querySelector('section');
    for (let i = 0; i < n; i++) {
        const tile = document.createElement('div');
        // tite.setAttribute('class', 'sp');
        tile.classList.add('sp');
        section.appendChild(tile);
    }
}
