import styles from "./Operator.module.css";
import { TiBackspace } from "react-icons/ti";
import { FaDivide } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function Operator(props) {
  return (
    <div className={styles.operators}>
      <button onClick={() => props.onReset()}>C</button>
      <button onClick={() => props.onInput("/")}>
        <FaDivide />
      </button>
      <button onClick={() => props.onInput("*")}><ImCross/></button>
      <button onClick={() => props.onInput("+")}><BsPlusLg/></button>
      <button onClick={() => props.onInput("-")}><BiMinus/></button>
      <button onClick={() => props.onDelete()}>
        <TiBackspace />
      </button>
    </div>
  );
}

export default Operator;
