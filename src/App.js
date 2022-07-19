import Digit from "./components/Digit";
import Operator from "./components/Operator";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <Result />
        <Operator />
        <Digit />
      </div>
    </div>
  );
}

export default App;
