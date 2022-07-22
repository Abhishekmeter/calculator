function ExponentPow(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.E)}>e</button>
    </div>
  );
}

export default ExponentPow;
