function Exponent(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.E)}>
        e
      </button>
    </div>
  );
}

export default Exponent;
