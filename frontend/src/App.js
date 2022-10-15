import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
const client= process.env.REACT_APP_CLIENT_ID
console.log(client)

function App() {

  return (
  <div>
    <Navbar/>
    <Homepage/>
    </div>
  );
}

export default App;
