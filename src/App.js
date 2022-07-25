import { useState } from "react";

import Digit from "./components/Digit";
import Operator from "./components/Operator";
import Result from "./components/Result";
import SciOperator from "./components/scientific/SciOperator";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [scientific, setScientific] = useState(false);

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    let lastOptIndex = 0;
    if (result !== undefined && calc !== undefined) {
      for (let i = 0; i < calc.length; i++) {
        for (let j = 0; j < 4; j++) {
          if (calc[i] === ops[j]) {
            lastOptIndex = i;
          }
        }
      }
      
      if (
        (ops.includes(value) && calc === "") ||
        (ops.includes(value) && ops.includes(calc.toString().slice(-1))) ||
        (value === "." && calc.toString().slice(lastOptIndex + 1).includes("."))
      ) {
        return;
      }
      setCalc((oldState) => {
        return oldState + value;
      });

      if (!ops.includes(value)) {
        setResult(eval(calc + value).toString());
      }
    }
  };

  const setValue = (value) => {
    setCalc(value);
    setResult(value);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const reset = () => {
    setCalc("");
    setResult("");
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const switchCalc = (event) => {
    if (event.target.value === "Scientific") {
      setScientific(true);
    } else {
      setScientific(false);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Result calc={calc} result={result} />
        {!scientific && (
          <div>
            <Operator
              onInput={updateCalc}
              onDelete={deleteLast}
              onReset={reset}
            />
            <Digit onInput={updateCalc} onEqual={calculate} />
          </div>
        )}
        {scientific && (
          <div>
            <SciOperator
              calc={calc}
              onReset={reset}
              onOperation={setValue}
            />
            <Digit onInput={updateCalc} onEqual={calculate} />
          </div>
        )}
        <button
          className="scientific"
          onClick={switchCalc}
          value={!scientific ? "Scientific" : "Standard"}
        >
          {!scientific ? "Scientific" : "Standard"}
        </button>
      </div>
    </div>
  );
}

export default App;
