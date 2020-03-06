import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const DetailsPage = (props) => {    
    if (props.location.item === undefined) {
        return <p>Please go back and select a movie</p>
    } else {
        let poster_path
        let Director_name
        let Cast_name = []
        props.location.item.data.poster_path === null ? poster_path = require('../images/no-image.png') : poster_path = "https://image.tmdb.org/t/p/w185" + props.location.item.data.poster_path
        props.location.item.data.credits.crew.map(Iterator => Iterator.job === "Director" ? Director_name = Iterator.name : null)
        props.location.item.data.credits.cast.map(Iterator => Cast_name.push(Iterator.name))
        return (
            <React.Fragment>
                <div className="movieDetailsDiv">
                    <h1>Movie Details</h1>
                </div>
                <div className="homeIcon">
                    <NavLink to="/"><HomeIcon fontSize="large" /></NavLink>
                </div>
                <hr />
                <div className="imageDiv">
                    <img alt="Poster" width="100%" height="400" src={poster_path} />
                </div>
                <div className="contentDiv">
                    <h1>{props.location.item.data.title} ({props.location.item.data.vote_average})</h1>
                    <p>{props.location.item.data.release_date} | {props.location.item.data.runtime} | {Director_name}</p>
                    <p><b>Cast: </b>{Cast_name.join()}</p>
                    <p><b>Description:</b> {props.location.item.data.overview}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default DetailsPage