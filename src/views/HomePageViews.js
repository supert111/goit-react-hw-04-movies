import { Component } from 'react';
import API from '../api/data.api';
import HomeMovieListView from './HomeMovieListView';


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
        const { match } = this.props.match;

        return (
            <div>
                <h1> Trending today </h1>
                <HomeMovieListView trendFilms={popularFilms} match={match} />
            </div>
        )
    }
};

export default HomePageViews;