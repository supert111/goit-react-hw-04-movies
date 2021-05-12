import { Component } from 'react';
import API from '../api/data.api';
import MoviesListView from '../components/MoviesListView/MoviesListView';
import Searchbar from '../components/Searchbar/Searchbar';

class MoviesPageViews extends Component {
    state = { query: '', movies: [], };

    componentDidUpdate(prevProps,prevState) {
        if(prevState.query !== this.state.query) {
            this.fetchMovie();
        }
    }

    fetchMovie = () => {
        const { query } = this.state;
        API.fetchFilmByQuery(query)
        .then(results => {
            this.setState({ query: query, movies: results })
        })
    }

    onChangeQuery = seachQuery => {
        this.setState({
            query: seachQuery,
        })
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${seachQuery}`,
          });
    }

    render () {
        const { movies, query } = this.state;
        console.log(query);
        return (
            <>
                <Searchbar onSubmit={this.onChangeQuery} />
                {movies && <MoviesListView movies={movies} />} 
            </>                         
        )
    }
}

export default MoviesPageViews;