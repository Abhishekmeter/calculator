import styles from "./Operator.module.css";

function Operator(props) {
  return (
    <div className={styles.operators}>
      <button onClick={() => props.onReset()}>C</button>
      <button onClick={() => props.onInput("/")}>/</button>
      <button onClick={() => props.onInput("*")}>*</button>
      <button onClick={() => props.onInput("+")}>+</button>
      <button onClick={() => props.onInput("-")}>-</button>
      <button onClick={() => props.onDelete()}>DEL</button>
    </div>
  );
}

export default Operator;
