import { useEffect } from "react";
import { useState } from "react";
import Country2 from "../Country2/Country2";
// import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <h3>Countries: {countries.length}
      </h3>

      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="country-container">
        {/* {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            } */}
        {countries.map((country2) => (
          <Country2 key={country2.cca3}
          handleVisitedCountry = {handleVisitedCountry} 
          country2={country2}></Country2>
        ))}
      </div>
    </div>
  );
};

export default Countries;
