import React from 'react';
import './App.css';
import { Routes,Route,} from 'react-router-dom';
import Home from './Pages/Home';
import Task from './Pages/Task';
import Notes from './Pages/Notes';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { useAuthentication } from './Contexts/Authentication.context';
import Navbar from './Companents/Navbar';



function App() {
 
  const { loggedIn} = useAuthentication();
  function renderRoutes(flag=false){
    if(flag) {
      return(
        <React.Fragment>
        <Route path="/Home" Component={Home} />
        <Route path="/Notes"Component={Notes}/>
        <Route path="/task" Component={Task} />
        </React.Fragment>
      )
    }
    else {
     return(
      <React.Fragment>
      <Route path="/" Component={Login}/>
     <Route path="Sign up" Component={Signup}/>
   </React.Fragment>
     )
    }
    
  }
  return (
    <div className='app-container '>
   <Navbar />
     <Routes>
     {renderRoutes(loggedIn)}
    </Routes>
      </div>
     
  );
}

export default App;
