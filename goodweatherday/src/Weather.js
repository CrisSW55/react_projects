import React, { useState} from "react";

const Weather = () => {
    const [coords,setCoords] = useState({lat:null,lon:null});
    const [weatherData,setWeatherData] = useState(null);
    const [backgroundColor,setBackgroundColor] = useState(null);
    const [isDisabled,setDisabled] = useState(false);
    const handleClick = function(){
      getWeatherData();
      setTempColor();
      setDisabled(true);
    }
  
    function setTempColor(){
     
      const temp = Math.floor((weatherData.current.temp - 273.15) * 1.8 + 32);
      temp > 90 ?
      setBackgroundColor(document.body.style.backgroundColor = "orange"):
      setBackgroundColor(document.body.style.backgroundColor = "cyan");
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({lat : position.coords.latitude,lon : position.coords.longitude});
    });
    const weatherKey = " your API key" //"328702ee3a024b62e79e63e47dbad4d8"
    const weatherURL =   `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${weatherKey}`
                        // Working Weather API Calls:
                        // `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${weatherKey}&units=${units}`
                        // `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${weatherKey}`
    async function getWeatherData() {
      try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
        setWeatherData(json);
     
       
      } catch (error) {
        console.error(error.message);
      }
    }
return (
    <>
      <h1>Good Weather Day!</h1>
      <p>
        Temperature: 
        {/* Conversion formula Kelvin to Fahrenheit: °F = (K − 273.15) × 1.8 + 32 */}
        {weatherData && Math.floor((weatherData.current.temp - 273.15) * 1.8 + 32) + "°F"}
      </p> 

      <p>
        Weather Type: 
        {weatherData && weatherData.current.weather[0].main}
      </p> 

      <p>
        Weather Description: 
        {weatherData && weatherData.current.weather[0].description}
      </p> 

      

      

      <button 
      disabled={isDisabled} 
      onClick={handleClick} 
      >
      Fetch Weather Data
      </button>
     
    </>
  );
};

export default Weather;
