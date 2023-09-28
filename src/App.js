import HomePage from './component/HomePage';
import Error from './component/routerfiles/Error';
//import { useState } from "react";
import LoginPage from './component/LoginPage';
import {Route,Routes } from 'react-router-dom';



function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState (false);

  //const buttonClickHandler = () => {
   // setIsLoggedIn(true)
   // }

   // const logoutHandler = () => {
   //   setIsLoggedIn(false);
    //};

   // const router = createBrowserRouter (
     // [{
       // path:'/',
        //element: <RootLayout/>,
        //errorElement: <Error/>,
        //children: [
        //  {path: '/', element: <HomePage/> },
         // {path: '/profile', element: <LoginPage/>},
        //]
      //}
       
      //]
    //)
  return (
    <div>
      <Routes>
        <Route  path='*' element={<Error/>}/>
        <Route path='/reshmi' element={<HomePage/>}/>
        <Route path='/profile' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
    //<div className="App">
    
      //{!isLoggedIn && <HomePage onClick={buttonClickHandler} />}
     //{isLoggedIn && <LoginPage onClick={logoutHandler} />}
    //</div>
  
}

export default App;
