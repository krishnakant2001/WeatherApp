import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./Form.css";

const Form = (props) => {
  const [enteredCity, setEnteredCity] = useState("");
  const sumbitHandler = (event) => {
    event.preventDefault();

    //data send to the app.js file
    props.onCityName(enteredCity);

    setEnteredCity("");
  };
  const cityChangeHandler = (event) => {
    // console.log(event.target.value);

    //convert 1st word of city in upperCase
    // const str = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);

    const str = event.target.value;
    setEnteredCity(str);
  };

  return (
    <div className="textArea">
      <form onSubmit={sumbitHandler}>
        <label htmlFor="cityName">Enter the name of City</label>
        <input
          id="cityName"
          type="text"
          onChange={cityChangeHandler}
          value={enteredCity}
        />
        <button>
          {/* <FontAwesomeIcon icon="fa-light fa-magnifying-glass" /> */}
          <BiSearch />
        </button>
      </form>
    </div>
  );
};
export default Form;
