import '../App.css';
import { Container } from 'react-bootstrap';
import mic from '../mic.png';
import network from '../network.png';

const Utilities = () => (
  <Container className="mt-3">
    <div className="utility">
      <img
        src={mic}
        alt="Mic"
        width="20"
        height="20"
        className="mr-5"
      />
      <img
        src={network}
        alt="Network"
        width="20"
        height="20"
      />
    </div>
  </Container>
);

export default Utilities;
