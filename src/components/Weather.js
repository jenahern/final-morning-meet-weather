import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import Card from 'react-bootstrap/Card';
import "../App.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "2e1a959d5cec1063c31190dc647f935b";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
          <Card body className='date-card text-center mt-4'>
      <span className="title">Check the Weather Where You Live</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        {/* &nbsp; &nbsp; &nbsp;&nbsp; */}
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather m-2 btn btn-primary" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>
      </Card>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
            
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    
    </div>
  );
}

export default Weather;