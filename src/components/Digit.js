import styles from "./Digit.module.css";
function Digit() {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div className={styles.digits}>
      {createDigits()}
      <button>0</button>
      <button>.</button>
      <button>=</button>
    </div>
  );
}

export default Digit;
