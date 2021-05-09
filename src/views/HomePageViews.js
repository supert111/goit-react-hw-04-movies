import { Component } from 'react';
import API from '../api/data.api';
import MovieListView from './MovieListView';


class HomePageViews extends Component {
    state = {
        popularFilms: [],
    };

    componentDidMount() {
        API.fetchPopularFilms()
        .then(results => {
            console.log(results)
            this.setState({ popularFilms: results })
        })
    };

    render() {
        const { popularFilms } = this.state;
        
        return (
            <div>
                <h1> Trending today </h1>
                <MovieListView trendFilms={popularFilms}/>
            </div>
        )
    }
};

export default HomePageViews;