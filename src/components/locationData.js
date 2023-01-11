import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { getLocations } from '../redux/location';
import arrow from '../rightarrow.png';
import '../App.css';

const LocationRender = () => {
  const { allLocations } = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allLocations.length) return;
    dispatch(getLocations());
  }, [dispatch, allLocations.length]);

  return (
    <Container className="p-3">
      <Alert variant="primary">
        Stay safe! Remember to wash your hands with soap 🧼
      </Alert>
      {allLocations.length ? (
        <div className="location-data">
          {allLocations.map((location) => (
            <a to="/" key={location.country} className="data">
              <div className="location__data">
                <h4>
                  {location.country}
                  (
                  {location.continent}
                  )
                </h4>
                <h5>
                  Population:
                  {location.population}
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
            </a>
          ))}
        </div>
      ) : (<h4>Loading...</h4>)}
    </Container>
  );
};

export default LocationRender;
