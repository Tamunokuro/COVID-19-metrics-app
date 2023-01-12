import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from '../components/Navbar';

it('Render Navbar correctly', () => {
  const navbar = render(<BrowserRouter><MyNavbar /></BrowserRouter>);
  expect(navbar).toMatchSnapshot();
});
