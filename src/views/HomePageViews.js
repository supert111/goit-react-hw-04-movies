import { Component } from 'react';
import API from '../api/data.api';

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
                <ul>
                    {popularFilms.map(film => ( 
                        <li key={film.id}> {film.title} </li>
                    ))}
                </ul>  
            </div>
        )
    }
};

export default HomePageViews;