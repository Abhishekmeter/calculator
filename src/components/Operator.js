import styles from "./Operator.module.css";

function Operator() {
  return (
    <div className={styles.operators}>
      <button>/</button>
      <button>*</button>
      <button>+</button>
      <button>-</button>
      <button>DEL</button>
    </div>
  );
}

export default Operator;
