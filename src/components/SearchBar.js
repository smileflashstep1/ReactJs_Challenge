import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';

const SearchBar = (props) => {    
    return (
        <React.Fragment>
            <button className="searchButton" disabled><SearchIcon fontSize="large" /></button>
            <div className="inputDiv">
                <input type="text" placeholder="Search" onChange={props.handleSearch} className="search" />
            </div>
            <div className="homeIcon">
                <NavLink to="/"><HomeIcon fontSize="large" /></NavLink>
            </div>
        </React.Fragment>
    )
}

export default SearchBar