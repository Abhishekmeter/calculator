import Square from "./Square";
import SquareRoot from "./SquareRoot";

import styles from "./SciOperator.module.css";

function SciOperator(props) {
  return (
    <div className={styles.scioperator}>
      <Square onInput={props.onInput} value="sqr"/>
      <SquareRoot />
    </div>
  );
}

export default SciOperator;
