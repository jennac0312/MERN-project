import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/app_context";
import "./header.css";

const Header = ({ parent }) => {

	const { currentPage, setShowSearch, showNav, setShowNav } = useContext(AppContext);
	const [ searchBurner, setSearchBurner ] = useState("")


	const handleSearchClick = () => {
		if( showNav ){
			setShowNav(false) // hide nav if open
		} else {
			setShowSearch(true)
			// handle search
			// navigate to search page... 
				// do i want this to be an enitre page?
		}
	}

	const handleBurnerClick = () => {
		if( showNav ){
			setShowNav(false) // hide nav if open
		} else {
			// delete all messages. throw burner away
		}
	}

	const main = () => {
		return (
			<header>
				<p className="hover icon-30" onClick={() => setShowNav(!showNav)}>
					🗄️
				</p>
				<p onClick={() => setShowNav(false)}>HEADER channel name</p>
				<p className="hover icon-30" onClick={ handleSearchClick }>🔍</p>
			</header>
		);
	}

	const burner = () => {

		const handleChange = (e) => {
			setSearchBurner( e.target.value )
			console.log('burner search:', searchBurner)
		}

		return (
			<header>
				<p className="hover icon-30" onClick={() => setShowNav(!showNav)}>
					🗄️
				</p>
				<input type="text" placeholder="search burner" autoFocus onClick={() => setShowNav(false)} onChange={(e) => handleChange(e)} value={searchBurner || ""}/>
				<p className="hover icon-30" onClick={ handleBurnerClick }>🔥</p>
			</header>
		);
	}

	return parent === "burner" ? burner() : main()
};

export default Header;
