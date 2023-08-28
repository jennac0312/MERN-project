import axios from 'axios';
import './App.css';
import { handleClick, testing } from './utilities/test/index';
import { useContext } from 'react';
import { AppContext } from './contexts/app_context';
import { Routes, Route } from 'react-router-dom';

function App() {

  const { test } = useContext( AppContext )

  const button = async () => {
    const testResponse = await testing()
    console.log( testResponse ) // undefined
  }

  return (
    <div className="App">
      <ol>
        <li> authentication </li>
        <li> back end auth route </li>
        <li> front end form  </li>
      </ol>

    <button onClick={button}>Test</button>
    <h1>{ test }</h1>

    <Routes>
      <Route path={"/test"} element={ <h1>test route works</h1>} />
      <Route path={"/*"} element={ <h1>You are off course Agent. Return to {'<HQ/>'}</h1>} />
    </Routes>


    </div>
  );
}

export default App;
