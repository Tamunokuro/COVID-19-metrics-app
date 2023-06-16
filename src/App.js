import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Locations from './pages/locations';
import CountryDetails from './pages/details';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Locations />} />
        <Route exact path="/details/:country_name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
