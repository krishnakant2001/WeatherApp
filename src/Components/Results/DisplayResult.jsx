import "./DisplayResult.css";
const DisplayResult = (props) => {
  return (
    <div className="card">
      <h1>{props.city}</h1>
      {props.temperature && <h2>{props.temperature}&deg;C</h2>}
      {props.description && <h3>{props.description}</h3>}
    </div>
  );
};

export default DisplayResult;
