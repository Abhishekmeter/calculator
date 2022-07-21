import { useState } from "react";

import Digit from "./components/Digit";
import Operator from "./components/Operator";
import Result from "./components/Result";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    let lastOptIndex = 0;
    for (let i = 0; i < calc.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (calc[i] === ops[j]) {
          lastOptIndex = i;
        }
      }
    }
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1))) ||
      (value === "." && calc.slice(lastOptIndex + 1).includes("."))
    ) {
      return;
    }
    setCalc((oldState) => {
      return oldState + value;
    });

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const reset = () => {
    setResult("");
    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <Result calc={calc} result={result} />
        <Operator onInput={updateCalc} onDelete={deleteLast} onReset={reset} />
        <Digit onInput={updateCalc} onEqual={calculate} />
      </div>
    </div>
  );
}

export default App;
