import axios from 'axios';
import './App.css';
import { handleClick, testing } from './utilities/test/index';
import { useContext } from 'react';
import { AppContext } from './contexts/app_context';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/sign-up/SignUp';
import Root from './pages/root/Root';
import Welcome from './pages/welcome/Welcome';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Burner from './pages/burner/Burner';
import SafeHouse from './pages/safehouse/SafeHouse';

function App() {

  const { showNav } = useContext( AppContext )

  return (
    <div className="App">
      { showNav && <Nav /> }
    <Routes>
      <Route path={"/"} element={ <Welcome /> } />
      <Route path={"/headquarters"} element={ <Home /> } />
      <Route path={"/burner"} element={ <Burner /> } />
      <Route path={"/safehouse"} element={ <SafeHouse /> } />
      
      <Route path={"/login"} element={ <LogIn /> } />
      <Route path={"/signup"} element={ <SignUp /> } />
      {/* <Route path={"/welcome"} element={ <Welcome /> } /> */}


      <Route path={"/test"} element={ <h1>test route works</h1>} />
      <Route path={"/*"} element={ <h1>You are off course Agent. Return to {'<HQ/>'}</h1>} />
    </Routes>

    </div>
  );
}

export default App;
