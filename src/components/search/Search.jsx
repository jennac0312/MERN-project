import React, { useContext } from 'react'
import styles from './search.module.css'
import { AppContext } from '../../contexts/app_context'

const Search = () => {
    // need to decide if i want exit button to also clear search

    const { search, setSearch, setShowSearch } = useContext( AppContext )

    const clearSearch = () => {
        setSearch("")
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }

  return (
    <div className={styles.search}>
        <p className={`${styles.icon} hover`} onClick={() => setSearch("")}>🧹</p>
        <div className="middle">
            <h3>Searching channel name</h3>
            <textarea type="text" placeholder={`search channel name`} value={search} onChange={(e) => handleChange(e)}/>
        </div>
        <p className={`${styles.icon} hover`} onClick={() => setShowSearch(false)}>✖️</p>
    </div>
  )
}

export default Search
