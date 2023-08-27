import axios from 'axios';
import './App.css';
import { handleClick } from './utilities/test/index';

function App() {

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


    </div>
  );
}

export default App;
