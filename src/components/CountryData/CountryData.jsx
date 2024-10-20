const CountryData = ({
  country2,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {

    console.log(handleVisitedCountry)

  return (
    <div>
      <h4>
        <small>Country Data: {country2.name.common}</small>
        
      </h4>
    </div>
  );
};

export default CountryData;
