import React, {Fragment} from 'react';
import { NavLink, Link } from 'react-router-dom';

const Card = ({min, max, name, img, onClose, id}) => {

  return (  
    <Fragment>
      <button onClick={onClose}>X</button>
      <Link to={`/ciudad/${id}`}>{name}</Link>
      <Fragment>
        <div>
          <p>Min</p>
          <p>{min}º</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}º</p>
        </div>
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="not found" width="80" height="80" />
      </Fragment>
    </Fragment>
  );
}
 
export default Card;