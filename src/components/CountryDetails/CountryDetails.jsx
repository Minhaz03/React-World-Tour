import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const {
    //     country2,
    //     handleVisitedCountry,
    //     handleVisitedFlags,
    //   } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
        country2={country2}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
