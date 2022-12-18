import React from 'react';
import './App.css';
let weatherData;

// Fectch data from API;
fetch('https://goweather.herokuapp.com/weather/Curitiba')
  .then((val) => {
    weatherData = val
    return val.json();
  })
  .then((val2) => {
    console.log("data fetched from github/mock_data");
  }).catch((err) => { console.log(`Error is ${err}`) })



function App() {
  return (
    <React.Fragment>
      <p>Under cunstruction</p>
      <p>{weatherData}</p>
    </React.Fragment>
  );
}

export default App;
