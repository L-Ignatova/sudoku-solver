import {solve, grid} from "./solutions/solutionTwo";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Grid />
      <button onClick={() => solve(grid)}>Solve</button>
    </div>
  );
}

export default App;
