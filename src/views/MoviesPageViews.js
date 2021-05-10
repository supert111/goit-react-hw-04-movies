//import PropTypes from 'prop-types';
import { Component } from 'react';
import API from '../api/data.api';
import Searchbar from '../components/Searchbar/Searchbar';

class MoviesPageViews extends Component {
    state = { query: '' };

    componentDidUpdate(prevState) {
        if(prevState.query !== this.state.query) {
            this.fetchMovie();
        }
    }

    fetchMovie = () => {
        const { query } = this.state;
        API.fetchFilmByQuery(query)
        .then(results => {
            console.log(results)
            this.setState({ query: results })
        })
    }

    onChangeQuery = seachQuery => {
        this.setState({
            query: seachQuery,
        })
    }

    render () {
        return (
            <>
                <Searchbar onSubmit={this.onChangeQuery}/>
            </>
        )
    }
}

// MoviesPageViews.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

export default MoviesPageViews;