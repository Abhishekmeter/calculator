import { TbSquareRoot2 } from "react-icons/tb";

function SquareRoot(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.sqrt(props.calc))}>
        <TbSquareRoot2 />
      </button>
    </div>
  );
}

export default SquareRoot;
