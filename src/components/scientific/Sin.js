function Sin(props) {
  return (
    <div>
      <button onClick={() => props.onInput(Math.sin(props.calc))}>sin</button>
    </div>
  );
}

export default Sin;
