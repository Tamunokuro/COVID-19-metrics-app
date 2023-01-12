import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import arrow from '../left-arrow.png';

const CountryDetails = () => {
  const { allDetails } = useSelector((state) => state.details);

  return (
    <Container>
      <Link to="/">
        <img
          src={arrow}
          width="50"
          height="50"
          alt="Right Arrow"
          className="mb-5"
        />
      </Link>
      {allDetails.length ? (
        <>
          {allDetails.map((country) => (
            <div className="details mt-4" key={uuidv4()}>
              <h2 style={{ fontWeight: '900' }}>
                {country.country.toUpperCase()}
                (
                {country.countryInfo.iso3}
                )
              </h2>
              <div className="country-details">
                <h4>Total cases:</h4>
                <h4>{country.cases.toLocaleString()}</h4>
              </div>
              <div className="country-details">
                <h4>Deaths:</h4>
                <h4>{country.deaths.toLocaleString()}</h4>
              </div>
              <div className="country-details">
                <h4>Recovered patients:</h4>
                <h4>{country.recovered.toLocaleString()}</h4>
              </div>
              <div className="country-details">
                <h4>Active cases:</h4>
                <h4>{country.active.toLocaleString()}</h4>
              </div>
              <div className="country-details">
                <h4>Test conducted:</h4>
                <h4>{country.tests.toLocaleString()}</h4>
              </div>
            </div>
          ))}
        </>
      ) : (<h3>Loading...</h3>)}

    </Container>
  );
};

export default CountryDetails;
