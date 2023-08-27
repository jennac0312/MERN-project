import axios from 'axios';
import './App.css';
import { handleClick } from './utilities/test/index';
import { useContext } from 'react';
import { AppContext } from './contexts/app_context';

function App() {

  const { test } = useContext( AppContext )

  const button = async () => {
    const testResponse = await handleClick()
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


    </div>
  );
}

export default App;
