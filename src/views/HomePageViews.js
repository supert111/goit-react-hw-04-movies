import { Component } from 'react';
import API from '../api/data.api';
import MoviesListView from './MoviesListView';


class HomePageViews extends Component {
    state = {
        popularFilms: [],
    };

    componentDidMount() {
        API.fetchPopularFilms()
        .then(results => {
            this.setState({ popularFilms: results })
        })
    };

    render() {
        const { popularFilms } = this.state;

        return (
            <div>
                <h1> Trending today </h1>
                <MoviesListView movies={popularFilms} />
            </div>
        )
    }
};

export default HomePageViews;