import React from 'react';
import './App.css';

const api = {
  key: "fd3969b8d3b05f53d5476b668cd5ac9e",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const dateBuilder = (d => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  })

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search...">
          </input>
        </div>
        <div className="location-box">
          <div className="location">
            New York, US
          </div>
          <div className="date">
            {dateBuilder(new Date())}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
