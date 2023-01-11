import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getLocations, getSpecificLocation } from '../redux/location';
import logo from '../weather.png';
import '../App.css';

const MyNavbar = () => {
  const dispatch = useDispatch();
  const [location, searchLocation] = useState('London');

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
    <Navbar className="nav" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Container className="navbar">
        <Navbar.Brand style={{ display: 'flex', gap: '10px' }}>
          <img
            src={logo}
            width="50"
            height="50"
            alt="Open weather cloud"
          />
          <h3 className="navbar-header">Open Weather</h3>
        </Navbar.Brand>
        <Form className="d-flex" style={{ width: '70%' }} onSubmit={(e) => getSearchResult(e)}>
          <Form.Control
            type="search"
            placeholder="ex. London"
            className="me-2"
            aria-label="Search"
            onChange={(e) => onChange(e)}
          />
          <Button variant="primary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
