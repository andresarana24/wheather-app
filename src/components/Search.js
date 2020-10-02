import React, { useState } from 'react';

const Search = ({onSearch}) => {
  const [city, setCity] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    onSearch(city)
    setCity('');
    console.clear();
    console.log('botón click');
  };

  return (  
    <form onSubmit={onClick}>
      <input 
        type="text" 
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
 
export default Search;