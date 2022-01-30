import {solve} from "./solutions/solutionOne";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Grid />
      <button onClick={solve}>Solve</button>
    </div>
  );
}

export default App;
