function Cos(props) {
    return (
      <div>
        <button onClick={() => props.onInput(Math.cos(props.calc))}>cos</button>
      </div>
    );
  }
  
  export default Cos;
  