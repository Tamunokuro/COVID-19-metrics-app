import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from '../components/Navbar';

describe('Navbar displays correctly', () => {
    it('Render Navbar correctly', () => {
        const navbar = render(<BrowserRouter><MyNavbar /></BrowserRouter>);
        expect(navbar).toMatchSnapshot();
      });
      
      it('Check if navbar has header in document', () => {
          render(<BrowserRouter><MyNavbar /></BrowserRouter>); 
          expect(screen.getByRole('heading')).toBeInTheDocument();
      })

})
