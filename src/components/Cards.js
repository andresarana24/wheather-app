import React, {Fragment} from 'react';
import Card from './Card';

const Cards = ({cities, onClose}) => {

  return (  
    <Fragment>
      <h1>Cards</h1>
      {
        cities.map(c => <Card 
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}          
        />)        
      }
    </Fragment>
  );
}
 
export default Cards;