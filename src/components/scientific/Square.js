import { TbSuperscript } from "react-icons/tb";

function Square(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.pow(props.calc, 2))}>
        <TbSuperscript />
      </button>
    </div>
  );
}

export default Square;
