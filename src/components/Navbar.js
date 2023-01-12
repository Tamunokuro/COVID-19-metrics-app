import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../autoimmune-disease.png';
import '../App.css';

const MyNavbar = () => (
  <>
    <Navbar className="nav" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Container className="navbar">
        <Navbar.Brand style={{ display: 'flex', gap: '10px' }}>
          <img
            src={logo}
            width="50"
            height="50"
            alt="Open weather cloud"
          />
          <h3 className="navbar-header">COVID-19 NEWS</h3>
        </Navbar.Brand>

      </Container>
    </Navbar>
  </>
);

export default MyNavbar;
