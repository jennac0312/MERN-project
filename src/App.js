import axios from 'axios';
import './App.css';

function App() {

  const BASE_URL = '/test'

  const handleClick = async () => {
    console.log( 'button clicked' )
    try {
      const res = await axios( BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
      })
    } catch (error) {
      console.error( error )
    }
  }

  return (
    <div className="App">
      <ol>
        <li> authentication </li>
        <li> back end auth route </li>
        <li> front end form  </li>
      </ol>

    <button onClick={handleClick}>Test</button>


    </div>
  );
}

export default App;
