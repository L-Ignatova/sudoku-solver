import React, { useEffect, useRef, useState } from "react";
import Row from "./Row";
import { startExecution } from "./solutions/solutionTwo";

const Grid = () => {
  const [solution, setSolution] = useState([]);
  const [time, setTime] = useState("");
  const isInitialMount = useRef(true);

  const getGrid = (ev) => {
    ev.preventDefault();
    const currentGrid = [];

    for (let i = 0; i < 9; i++) {
      currentGrid.push([]);
      for (let j = 0; j < 9; j++) {
        const val = document.getElementById(`(${i}, ${j})`).value;
        !val
          ? currentGrid[i].push(0)
          : currentGrid[i].push(parseInt(val));
      }
    }

    const { executionTime, grid } = startExecution(currentGrid);
    setTime(executionTime);
    setSolution(grid);
  };

  useEffect(() => {
    const setNewGrid = () => {
      if (solution.length > 0) {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            const element = document.getElementById(`(${i}, ${j})`);
            if (!element.value) {
              element.setAttribute("style", "color: green");
              element.value = solution[i][j];
            }
          }
        }
      }
    }

    isInitialMount.current 
      ? isInitialMount.current = false 
      : setNewGrid();
  }, [time]);

  return (
    <div>
      <form onSubmit={getGrid} className="grid">
        <Row rowNumber={0} />
        <Row rowNumber={1} />
        <Row rowNumber={2} />
        <Row rowNumber={3} />
        <Row rowNumber={4} />
        <Row rowNumber={5} />
        <Row rowNumber={6} />
        <Row rowNumber={7} />
        <Row rowNumber={8} />
        <button type="submit">Solve</button>
      </form>
      {time && <h4>{time}</h4>}
    </div>

  );
};

export default Grid;