const container = document.getElementById('container');
const btn = document.getElementById('btn');
// const btnRndm = document.getElementById('btnRndm');

let standard = 16;

// function createGrid(size){
//     container.innerHTML = '';
//     let dimension = Math.sqrt(size);
//     for(i = 0; i < dimension; i++){
//         // create row
//         let row = document.createElement("div");
//         row.classList.add('cell');
        
//         // create column cells in that row
//         for(j = 0; j < dimension; j++){
//             let col = document.createElement("div");
//             col.classList.add('cell');
//             row.appendChild(col);
//         }
//         container.appendChild(row);
//     }
// };


function createGrid(num) {
    container.innerHTML = '';
    for (i = 0; i < num; i++){
        const divC = document.createElement('div');
        divC.classList.add('cell');
        container.appendChild(divC);
        divC.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'black';
        });
        for (j = 0; j < num; j++) {
         const divR = document.createElement('div');
         divR.classList.add('cell');
         divC.appendChild(divR);
        };
    }
};

btn.addEventListener('click', () => {
    let newGrid = prompt('Enter a single number between 1-100 to pick a dimension.');
    createGrid(newGrid);
});

btnRndm.addEventListener('click', () => {
    let randomGrid = Math.floor(Math.random() * 100);
    createGrid(randomGrid);
});

createGrid(standard);
