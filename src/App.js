import React, { useState } from "react";
import Form from "./Components/input/Form";
import Display from "./Components/ApiCall/Display";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");

  const cityNameHandler = (name) => {
    setCity(name);
  };

  return (
    <div>
      <div className="mainHeading">Weather App</div>
      <section id="inputArea">
        <Form onCityName={cityNameHandler} />
      </section>
      <section>
        {city ? (
          <div className="cityName">
            <Display cityName={city} />
          </div>
        ) : (
          <div className="centerised">
            <div className="blurness">
              <Display cityName="london" />
            </div>
            <div className="blurness">
              <Display cityName="new york" />
            </div>
            <div className="blurness">
              <Display cityName="mumbai" />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
