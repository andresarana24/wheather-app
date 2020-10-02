import React, {Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';

const ShowCity = ({city}) => {

  console.clear();
  console.log(city);

  const ciudad = city[0];

  if(ciudad === undefined){
    return (
      <h1>No hay ciudad para mostrar</h1>
    );
  }

  return (  
    <Fragment>
      <h2>{ciudad.name}</h2>
      <div>
        <p>Temperatura: {ciudad.temp} ºC</p>
        <p>Clima: {ciudad.weather}</p>
        <p>Viento: {ciudad.wind} km/h</p>
        <p>Cantidad de nubes: {ciudad.clouds}</p>
        <p>Latitud: {ciudad.latitud}</p>
        <p>Longitud: {ciudad.longitud}</p>
      </div>
      <Link to="/">Back</Link>
    </Fragment>
  );
}
 
export default ShowCity;