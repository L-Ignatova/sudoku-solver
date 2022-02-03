import {
  notInRowOrCol,
  notInBox,
  isZeroInGrid,
  printGrid,
} from "./utils";

// export let grid = [
//   [0, 0, 0, 8, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 4, 3],
//   [5, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 7, 0, 8, 0, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 2, 0, 0, 3, 0, 0, 0, 0],
//   [6, 0, 0, 0, 0, 0, 0, 7, 5],
//   [0, 0, 3, 4, 0, 0, 0, 0, 0],
//   [0, 0, 0, 2, 0, 0, 6, 0, 0]
// ];

export let grid = [
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

const range = Array.from(Array(9).keys(), x => x + 1);
let round = 0;
let startTime;
let endTime;

export const solve = (grid) => {
  let newGrid = [];

  if (round === 0) {
    startTime = performance.now();
  }
  
  if (!isZeroInGrid(grid)) {
    endTime = performance.now();
    console.log(`Execution time: ${Math.floor((endTime - startTime)/1000)}s ${Math.floor((endTime - startTime)%1000)}ms`);
    printGrid(grid, round);
    return true;
  }
  round += 1;

  for (let [i, row] of grid.entries()) {
    newGrid.push([]);
    
    for (let [j, val] of row.entries()) {
      if (val === 0) {
        for (let possibleValue of range) {
          if (notInBox(possibleValue, i, j, grid) && notInRowOrCol(possibleValue, i, j, grid)) {
            let gridWithPossibleVal = newGrid.map(g => g.slice());
            gridWithPossibleVal[i].push(possibleValue);

            if (j < row.length - 1) {
              for (let m = j + 1; m < row.length; m++) {
                gridWithPossibleVal[i].push(grid[i][m]);
              }
            }

            if (i < grid.length - 1) {
              for (let n = i + 1; n < grid.length; n++) {
                gridWithPossibleVal.push(grid[n]);
              }
            }
            if (solve(gridWithPossibleVal)) {
              return true;
            } 
          }
        }
        return false;
      } else {
        newGrid[i].push(val);
      }
    }
  }

}
