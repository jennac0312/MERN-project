import axios from 'axios';
import './App.css';
import { handleClick, testing } from './utilities/test/index';
import { useContext } from 'react';
import { AppContext } from './contexts/app_context';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/sign-up/SignUp';

function App() {

  const { test } = useContext( AppContext )

  const button = async () => {
    const testResponse = await handleClick()
    // const testResponse = await testing()
    console.log( testResponse ) // undefined
  }

  const seed = async () => {
    await axios.get('/seed/users')
  }

  return (
    <div className="App">
      <ol>
        <li> authentication </li>
        <li> back end auth route </li>
        <li> front end form  </li>
      </ol>

    <button onClick={button}>Test Backend</button>
    <h1>{ test }</h1>

    <Routes>
      <Route path={"/login"} element={ <LogIn /> } />
      <Route path={"/signup"} element={ <SignUp /> } />
      <Route path={"/test"} element={ <h1>test route works</h1>} />
      <Route path={"/*"} element={ <h1>You are off course Agent. Return to {'<HQ/>'}</h1>} />
    </Routes>

    <button onClick={seed}>seed</button>
    </div>
  );
}

export default App;
