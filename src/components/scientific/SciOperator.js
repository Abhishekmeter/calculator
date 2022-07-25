import Square from "./Square";
import SquareRoot from "./SquareRoot";
import Reverse from "./Reverse";

import styles from "./SciOperator.module.css";
import Exponent from "./Exponent";
import ExponentPow from "./ExponentPow";
import Sin from "./Sin";
import Cos from "./Cos";
import Tan from "./Tan";

function SciOperator(props) {
  return (
    <div className={styles.scioperator}>
      <div>
        <button onClick={() => props.onReset()}>C</button>
      </div>
      <div>
        <Square onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <SquareRoot onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <Reverse onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <Exponent onInput={props.onOperation} />
      </div>
      <div>
        <ExponentPow onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <Sin onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <Cos onInput={props.onOperation} calc={props.calc} />
      </div>
      <div>
        <Tan onInput={props.onOperation} calc={props.calc} />
      </div>
    </div>
  );
}

export default SciOperator;
