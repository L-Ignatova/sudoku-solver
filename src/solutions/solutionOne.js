const printGrid = (g) => {
  for (let row of g) {
    console.log(row.join("  "));
  }
}

const gridsMatch = (g1, g2) => {
  for (let i = 0; i < g1.length; i++) {
    for (let j = 0; j < g1.length; j++) {
      if (g1[i][j] !== g2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

const getColumn = (index, g) => g.map(row => row[index]);

const isZeroInGrid = g => {
  for (let row of g) {
    if (row.some(el => el === 0)) {
      return true;
    };
  }
  return false;
};

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

let grid = [
  [0, 0, 0, 0, 0, 0, 4, 0, 3],
  [0, 0, 0, 3, 0, 0, 5, 0, 9],
  [0, 3, 0, 5, 6, 9, 7, 1, 0],
  [0, 6, 7, 0, 0, 0, 0, 4, 0],
  [0, 4, 0, 0, 3, 0, 2, 9, 0],
  [0, 2, 0, 0, 0, 0, 6, 8, 0],
  [0, 0, 2, 0, 0, 1, 9, 0, 4],
  [0, 0, 3, 8, 0, 5, 0, 7, 6],
  [0, 7, 0, 4, 9, 0, 8, 5, 2]
];

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let round = 0;
let unsolved = isZeroInGrid(grid);

export const solve = () => {
  while (unsolved) {
    let newGrid = [];
    let possibleValues = {};
    round += 1;

    for (const [i, row] of grid.entries()) {
      newGrid.push([]);

      for (const [j, val] of row.entries()) {
        if (val === 0) {
          let identifier = `(${i}, ${j})`;

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
      }
    }

    let match = gridsMatch(grid, newGrid);

    match ? console.log("This one is too hard!") : grid = newGrid;
    unsolved = match ? false : isZeroInGrid(newGrid);
  }
  console.log(`---------ROUND-${round}---------`);
  printGrid(grid);
}

