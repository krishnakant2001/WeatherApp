import axios from "axios";
import { useEffect, useState } from "react";
import DisplayResult from "../Results/DisplayResult";
import "./Display.css";

const Display = (props) => {
  const apiKey = "42626b37308c16052aaa910765a74a91";

  const [newData, setNewData] = useState({});
  const [error, setError] = useState(false);

  const getWeatherDetails = (city) => {
    if (!city) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiURL)
      .then((res) => {
        // console.log(res.data.weather[0]);
        setNewData(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setError(true);
      });
  };

  useEffect(() => {
    getWeatherDetails(props.cityName);
  }, [props.cityName]);


  return (
    <div className="display">
      {!error ? (
        <DisplayResult
          city={newData.name}
          temperature={newData.main?.temp}
          description={newData.weather?.[0]?.main}
        />
      ) : (
        <DisplayResult city={"Not Found"} />
      )}
    </div>
  );
};

export default Display;

//With the optional chaining operator (?.), however, you
//don't have to explicitly test and short-circuit based
//on the state of obj.first before trying to access obj.first.second
