const printGrid = (g, round) => {
  console.log(`---------ROUND-${round}---------`);
  g.forEach(row => console.log(row.join(" ")))
};

const gridsMatch = (g1, g2) => {
  return !g1.some((row, i) => row.some((el, j) => el !== g2[i][j]));
};

const getColumn = (index, g) => g.map(row => row[index]);

const isZeroInGrid = g => g.some(row => row.some(el => el === 0));

const notInRowOrCol = (el, row, col, g) => {
  const inRow = g[row].includes(el);
  const inCol = getColumn(col, g).includes(el);

  return !inRow && !inCol;
};

const notInBox = (el, row, col, g) => {
  const box_x = Math.floor(row / 3);
  const box_y = Math.floor(col / 3);
  let box = [];

  for (let i = box_x * 3; i < box_x * 3 + 3; i++) {
    for (let j = box_y * 3; j < box_y * 3 + 3; j++) {
      box.push(g[i][j]);
    }
  }

  return !box.includes(el);
};

// let grid = [
//   [0, 0, 0, 0, 0, 0, 4, 0, 3],
//   [0, 0, 0, 3, 0, 0, 5, 0, 9],
//   [0, 3, 0, 5, 6, 9, 7, 1, 0],
//   [0, 6, 7, 0, 0, 0, 0, 4, 0],
//   [0, 4, 0, 0, 3, 0, 2, 9, 0],
//   [0, 2, 0, 0, 0, 0, 6, 8, 0],
//   [0, 0, 2, 0, 0, 1, 9, 0, 4],
//   [0, 0, 3, 8, 0, 5, 0, 7, 6],
//   [0, 7, 0, 4, 9, 0, 8, 5, 2]
// ];

let grid = [
  [0, 0, 9, 0, 0, 0, 4, 6, 3],
  [0, 0, 6, 3, 4, 0, 5, 2, 9],
  [2, 3, 4, 5, 6, 9, 7, 1, 8],
  [0, 6, 7, 0, 0, 0, 3, 4, 0],
  [0, 4, 0, 0, 3, 0, 2, 9, 0],
  [0, 2, 0, 0, 0, 0, 6, 8, 0],
  [0, 0, 2, 0, 0, 1, 9, 3, 4],
  [4, 9, 3, 8, 2, 5, 1, 7, 6],
  [0, 7, 0, 4, 9, 3, 8, 5, 2]
];

export const solve = () => {
  const range = Array.from(Array(9).keys(), x => x + 1);
  let unsolved = isZeroInGrid(grid);
  let round = 0;

  while (unsolved) {
    let newGrid = [];
    let possibleValues = {};
    round += 1;

    grid.forEach((row, i) => {
      newGrid.push([]);

      row.forEach((val, j) => {
        if (val === 0) {
          const identifier = `(${i}, ${j})`;

          possibleValues[identifier] = range.filter(val => {
            return (
              notInRowOrCol(val, i, j, grid) && notInBox(val, i, j, grid)
            );
          });

          possibleValues[identifier].length === 1
            ? newGrid[i].push(possibleValues[identifier][0])
            : newGrid[i].push(0);
        } else {
          newGrid[i].push(val);
        }
      });
    });
    // debugger
    let match = gridsMatch(grid, newGrid);

    match ? console.log("This one is too hard!") : grid = newGrid;
    unsolved = match ? false : isZeroInGrid(newGrid);
  }

  printGrid(grid, round);
};

