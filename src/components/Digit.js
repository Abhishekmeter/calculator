import styles from "./Digit.module.css";
function Digit(props) {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => props.onInput(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className={styles.digits}>
      {createDigits()}
      <button onClick={() => props.onInput("0")}>0</button>
      <button onClick={() => props.onInput(".")}>.</button>
      <button onClick={() => props.onEqual()}>=</button>
    </div>
  );
}

export default Digit;
