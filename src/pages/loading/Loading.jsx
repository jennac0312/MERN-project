import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'

const Loading = () => {

    // redirect to login/sign up || welcome after 5 secs based on user
    const { user } = useContext( AppContext )


  return (
    <div>
      <h1>LOADING PAGE</h1>
    </div>
  )
}

export default Loading
