function Tan(props) {
    return (
      <div>
        <button onClick={() => props.onInput(Math.tan(props.calc))}>tan</button>
      </div>
    );
  }
  
  export default Tan;