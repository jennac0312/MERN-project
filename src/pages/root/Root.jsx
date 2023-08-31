import React, { useContext } from 'react'
import axios from 'axios'
import {AppContext} from '../../contexts/app_context'

import { handleClick } from '../../utilities/test'

const Root = () => {

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
    <div>
        <h1>ROOT PAGE </h1>
        <h2>TASKS:</h2>
        
        <ol>
        <li> authentication </li>
        <li> back end auth route </li>
        <li> front end form  </li>
      </ol>

    <button onClick={button}>Test Backend</button>
    <h1>{ test }</h1>
    <button onClick={seed}>seed users</button>
    </div>

  )
}

export default Root
