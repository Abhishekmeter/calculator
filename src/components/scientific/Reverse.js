function Reverse(props) {
  return (
    <div>
      <button onClick={() => props.onInput(1/(props.calc))}>
        1/x
      </button>
    </div>
  );
}

export default Reverse;
