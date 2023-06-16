import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getLocations, getSpecificLocation } from '../redux/location';
import { getDetails } from '../redux/details';
import arrow from '../rightarrow.png';
import '../App.css';

const LocationRender = () => {
  const { allLocations } = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [location, searchLocation] = useState('London');

  useEffect(() => {
    if (allLocations.length) return;
    dispatch(getLocations());
  }, [dispatch, allLocations.length]);

  const getDetailsData = (country) => {
    dispatch(getDetails(country));
  };

  const onChange = (e) => {
    if (e.target.value === '') {
      e.preventDefault();
      dispatch(getLocations());
    }
    searchLocation(e.target.value);
  };

  const getSearchResult = (e) => {
    e.preventDefault();
    dispatch(getSpecificLocation(location));
  };

  return (
    <Container className="p-3">
      <Alert variant="primary">
        Stay safe! Remember to wash your hands with soap 🧼
      </Alert>
      <Form className="d-flex" style={{ width: '70%', margin: '1.5rem 0' }} onSubmit={(e) => getSearchResult(e)}>
        <Form.Control
          type="search"
          placeholder="ex. London"
          className="me-2 p-3"
          aria-label="Search"
          onChange={(e) => onChange(e)}
        />
        <Button variant="primary">Search</Button>
      </Form>
      {allLocations.length ? (
        <div className="location-data">
          {allLocations.map((location) => (
            <Link to={`/details/${location.country}`} key={location.country} className="data" onClick={() => getDetailsData(location.country)}>
              <div className="location__data">
                <h4>
                  {location.country.toUpperCase()}
                  (
                  {location.countryInfo.iso3}
                  )
                </h4>
                <h5>
                  Population:
                  { location.population.toLocaleString()}
                </h5>
                <img width={100} height={80} src={location.countryInfo.flag} alt="nigeria" />
              </div>
              <div>
                <img
                  src={arrow}
                  width="50"
                  height="50"
                  alt="Right Arrow"
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (<h4>Loading...</h4>)}
    </Container>
  );
};

export default LocationRender;
