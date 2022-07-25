function ExponentPow(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.pow(Math.E, props.calc))}>
        e^x
      </button>
    </div>
  );
}

export default ExponentPow;
