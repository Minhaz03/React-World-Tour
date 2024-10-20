import { useState } from "react";
import "./Country2.css";
const Country2 = ({ country2 }) => {
  const { name, flags, continents, capital, population, cca3 } = country2;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <img className="img" src={flags.png} alt="" />
      <p>Continent: {continents}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p><small>Code: {cca3}</small></p>

      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ?'I have visited these country.' : 'I want to visit'}
    </div>
  );
};

export default Country2;
