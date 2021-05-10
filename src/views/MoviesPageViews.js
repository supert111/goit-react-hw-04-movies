//import PropTypes from 'prop-types';
import { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';

class MoviesPageViews extends Component {
    state = { query: '' };

    handleChange = element => {
        this.setState({ query: element.currentTarget.value });
    };

    handleSubmit = element => {
        element.preventDefault();
        this.props.onSubmit(this.state.query);
        // this.setState({ query: '' });
    };

    render () {
        return (
            <header className="">
                <Searchbar onSubmit={this.onChangeQuery}/>
            </header>
        )
    }
}

// MoviesPageViews.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

export default MoviesPageViews;