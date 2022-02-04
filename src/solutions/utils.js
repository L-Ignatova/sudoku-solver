const printGrid = (gridToPrint) => {
  gridToPrint.forEach(row => console.log(row.join(" ")))
};

const gridsMatch = (gridOne, gridTwo) => {
  return !gridOne.some((row, i) => row.some((el, j) => el !== gridTwo[i][j]));
};

const getColumn = (index, currentGrid) => currentGrid.map(row => row[index]);

const isZeroInGrid = currentGrid => currentGrid.some(row => row.some(el => el === 0));

const notInRowOrCol = (el, row, col, currentGrid) => {
  const inRow = currentGrid[row].includes(el);
  const inCol = getColumn(col, currentGrid).includes(el);

  return !inRow && !inCol;
};

const notInBox = (el, row, col, currentGrid) => {
  const box_x = Math.floor(row / 3);
  const box_y = Math.floor(col / 3);
  let box = [];

  for (let i = box_x * 3; i < box_x * 3 + 3; i++) {
    for (let j = box_y * 3; j < box_y * 3 + 3; j++) {
      box.push(currentGrid[i][j]);
    }
  }

  return !box.includes(el);
};

export {
  notInBox,
  notInRowOrCol,
  printGrid,
  isZeroInGrid,
  gridsMatch,
};