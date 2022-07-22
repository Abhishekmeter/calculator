import Square from "./Square";
import SquareRoot from "./SquareRoot";
import Reverse from "./Reverse";

import styles from "./SciOperator.module.css";
import Exponent from "./Exponent";

function SciOperator(props) {
  return (
    <div className={styles.scioperator}>
      <button onClick={() => props.onReset()}>C</button>
      <Square onInput={props.onSquare} calc={props.calc} />
      <SquareRoot onInput={props.onSquareRoot} calc={props.calc} />
      <Reverse onInput={props.onReverse} calc={props.calc} />
      <Exponent onInput={props.exponent}/>
    </div>
  );
}

export default SciOperator;
