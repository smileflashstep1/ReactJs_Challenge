import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import ListPage from '../components/ListPage';
import history from '../Helpers/RouteHelpers/History';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchname: "",
            movies: [],
            selectedMovie: {}
        }
    }

    componentDidMount() {
        let movieDataImmutably = [...this.state.movies]
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e4cf3a457ac39de041b32c1f5bc53282&language=en-US&page=1")
            .then(response => {
                movieDataImmutably = response.data.results
                this.setState({
                    movies: movieDataImmutably
                })
            })
    }


    searchHandler = (event) => {
        let searchDataImmutably = [...this.state.movies]
        let name = event.target.value;
        if (name.length !== 0) {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=e4cf3a457ac39de041b32c1f5bc53282&language=en-US&page=1&sort_by=release_date.desc&query=" + event.target.value)
                .then(response => {
                    searchDataImmutably = response.data.results
                    this.setState({
                        movies: searchDataImmutably
                    })
                })
        } else {
            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e4cf3a457ac39de041b32c1f5bc53282&language=en-US&page=1")
                .then(response => {
                    this.setState({
                        movies: response.data.results
                    })
                })
        }
        this.setState({ searchname: name })
    }

    selectedMovieHandler = (id) => {
        let selectMovieImmutably = { ...this.state.selectedMovie }
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e4cf3a457ac39de041b32c1f5bc53282&language=en-US&append_to_response=credits`)
            .then(response => {
                selectMovieImmutably = response
                this.setState({
                    selectedMovie: selectMovieImmutably
                })
                if (this.state.selectedMovie.data.id !== undefined) {
                    history.push({
                        pathname: "/moviedetails",
                        item: this.state.selectedMovie
                    })
                }
            }
            )
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar handleSearch={this.searchHandler} />
                <hr />
                <ListPage movies={this.state.movies} selectedMovieHandler={this.selectedMovieHandler} />
            </React.Fragment>
        )
    }
}

export default Layout;