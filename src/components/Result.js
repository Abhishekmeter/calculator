import styles from "./Result.module.css";

function Result(props) {
  return (
    <div className={styles.display}>
      {props.result ? <span>({props.result})</span> : ""} {props.calc || 0}
    </div>
  );
}

export default Result;
