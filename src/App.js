import HomePage from './component/HomePage';
import { useState } from "react";
import './App.css';
import LoginPage from './component/LoginPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false);

  const buttonClickHandler = () => {
    setIsLoggedIn(true)
    }

    const logoutHandler = () => {
      setIsLoggedIn(false);
    };

  return (
    <div className="App">
    
      {!isLoggedIn && <HomePage onClick={buttonClickHandler} />}
     {isLoggedIn && <LoginPage onClick={logoutHandler} />}
    </div>
  );
}

export default App;
