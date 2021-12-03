import logo from './logo.svg';
import { useState } from 'react-redux'
import './App.css';
import { login, logout } from './firebase/authAction';

function App() {
  const [user, setUser] = useState(null)
  function handleLogin () {
    login().then((data)=> setUser(data))
  }

  function handleLogOut(){
    setUser(null)
    logout();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(user)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
       <button type="button" onClick={() => handleLogin()}>Login</button> 
      
       <button type="button" onClick={() => handleLogOut()}>LogOut</button> 
        
      </header>
    </div>
  );
}

export default App;
