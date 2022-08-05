import logo from './logo.svg';
import './App.css';
import UserIP from './components/UserIP';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

function App() {
  return (
      <Container sx={{
        // marginY: 5,
        textAlign: 'center',
        background: "#fff",
        height: "100vh"
        }}>
        <h1 className='hello'>Hello, and welcome to the IP Finder</h1>
        <div className='ip'>
          <h3>Want to know your IP?</h3>
          <p>Kindly click on the button below...👇🏾</p>
        </div>
        <Link to="/user_ip"><button className='getIpBtn'>Get Your IP</button></Link>
      </Container>
  );
}

export default App;
