import logo from './logo.svg';
import './App.css';
import { Link, useNavigate } from "react-router-dom"
// import dotenv from "dotenv"
// dotenv.config("../.env")
// const client= process.env.CLIENT_ID
// console.log(client)

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <a href={`https://github.com/login/oauth/authorize?client_id=f71fc93f7c7737da1601`}>Sign in with Github</a>
    </div>
  );
}

export default App;
