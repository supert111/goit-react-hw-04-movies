import { Component } from 'react';
import API from '../../api/data.api';

class CastMovieDetails extends Component {
    state = {
        "cast": [],
    }

    componentDidMount() {
        const  movId  = this.props.match.params.movieId; 
        API.fetchCast(movId)
        .then(results => {
            this.setState({ cast: results})
        })
    }

    render() {
        const { cast } = this.state.cast;
        return (
            <ul>
                {this.state.cast.length !== 0 &&          
                    cast.map(actor => (
                        <li key={actor.id}> 
                            <img src={API.profilePath + actor.profile_path} alt={actor.name} />
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </li>
                    ))
                    
                }
            </ul> 
        )
    }
}

export default CastMovieDetails;