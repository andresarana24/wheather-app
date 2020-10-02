import React, { useState } from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ShowCity from './components/ShowCity';


const App = () => {
  const [cities, setCities] = useState([]);

  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  const onSearch = (city) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9ec47a8150e44e6385aae05be36f9e11&units=metric";

    fetch(url)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  return ( 
    <Router>
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route exact path="/" render={() => 
        <Cards cities={cities} onClose={onClose}/>} />
      <Route path="/about" component={About} />
      <Route exact path="/ciudad/:ciudadId" render={({match}) => <ShowCity city={
        cities.filter(c => c.id === parseInt(match.params.ciudadId))
      } />} />
    </Router>
  );
}
 
export default App;

