//import PropTypes from 'prop-types';
import { Component } from 'react';
// import { Route } from 'react-router-dom';
// import routes from '../routes';
import API from '../api/data.api';
import MoviesListView from './MoviesListView';
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
    }

    render () {
        const { movies, query } = this.state;
        console.log(query);
        return (
            <>
                <Searchbar onSubmit={this.onChangeQuery} />
                <MoviesListView movies={movies} /> 
                {/* <Route path={`${routes.movies}?query=${query}`} component={MoviesListView} />  */}
                 
                  
{/*             
                <>
                </> */}
            </>                         
        )
    }
}

// MoviesPageViews.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

export default MoviesPageViews;