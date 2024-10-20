import { useState } from "react";
import "./Country2.css";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country2 = ({ country2, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, continents, capital, population, cca3 } = country2;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

//   console.log(handleVisitedCountry);

//   const passWithParams = () => {
//     handleVisitedCountry(country2);
//   }

  return (
    <div className={`country ${visited ? "visited" : "Non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Country Name: {name.common}
      </h3>

      <img className="img" src={flags.png} alt="" />

      <p>Continent: {continents}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country2)}>
       Mark Visited</button>
      <br />

      <button onClick={() => handleVisitedFlags(country2.flags.png )}>Add Flags</button> <br />

      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited these country." : "I want to visit"}
      <hr />
      <CountryDetails
        country2={country2}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      >  
      </CountryDetails>
    </div>
  );
};

export default Country2;
