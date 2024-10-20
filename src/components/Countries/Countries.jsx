import { useEffect } from "react";
import { useState } from "react";
import Country2 from "../Country2/Country2";
// import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className="country-container">
        {/* {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            } */}
      {countries.map((country2) => (
        <Country2 key={country2.cca3} country2={country2}></Country2>
      ))}
      </div>
    </div>
  );
};

export default Countries;
