import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import './burner.css'
import { AppContext } from '../../contexts/app_context'
import Message from '../../components/message/Message'
import SendMessage from '../../components/circle/Circle'

const Burner = () => {

  const { setShowNav } = useContext( AppContext )

  return (
    <div className='burner'>
      <SendMessage />
      <Header parent="burner"/>

      <main onClick={() => setShowNav(false)}>
        <h1>BURNER PAGE</h1>
        <Message />
        <Message />
        <Message />
        <Message />
      </main>

    </div>
  )
}

export default Burner
