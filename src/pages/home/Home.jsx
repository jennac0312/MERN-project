import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import styles from './home.module.css'
import { AppContext } from '../../contexts/app_context'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'
import Post from '../../components/post/Post'

const Home = () => {

  const { showSearch, setShowNav } = useContext( AppContext )


  return (
    <div className={styles.home} >
        { showSearch ? <Search /> : <Header /> }
        <main className={styles.main} onClick={() => setShowNav(false)}>
            {/* <h1>HOME PAGE</h1>
            <p>hq, main channel</p> */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
        <Footer />
    </div>
  )
}

export default Home
