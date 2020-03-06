import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="card" onClick={() => { props.selectedMovieHandler(props.id) }}>
            <img alt="Poster" width="100%" height="300" style={{ borderRadius: "15px" }} src={props.poster} />
            <div className="cardcontainer">
                <div className="movieCardDiv">
                    {
                        props.title.length > 30 ? <h6><b>{props.title}</b></h6> : <h4><b>{props.title}</b></h4>
                    }
                </div>
                <div className="ratingDiv">
                    <b>{props.rating}</b>
                </div>
                <div className="descDiv">
                {
                    props.description.length < 60 ? <p>{props.description}...</p> : <p>{props.description.substring(0, 60)}...</p>
                }
                </div>
                
            </div>
        </div>
    )
}

export default MovieCard