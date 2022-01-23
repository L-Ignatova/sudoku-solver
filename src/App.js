import {solve} from "./solutions/solutionOne";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Grid />
      <button onClick={solve}>Solve</button>
      {/* {solve()} */}
    </div>
  );
}

export default App;
