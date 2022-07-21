import { TbSuperscript } from "react-icons/tb";

function Square(props) {
  return (
    <div>
      <button onClick={() => props.onInput("Math.pow(")}>
        <TbSuperscript />
      </button>
    </div>
  );
}

export default Square;
