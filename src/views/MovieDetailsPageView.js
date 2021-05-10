import { Component } from 'react';
import API from '../api/data.api';


class MovieDetailsPageView extends Component {
    state = { 
        movieId: [],
    }

    componentDidMount() {
        const  movId  = this.props.match.params.movieId; 
        API.fetchFilmById(movId)
        .then(results => {
            this.setState({ movieId: results})
        })
    }
    

    // handleClick (e) {
    //     e.preventDefault();

    // }


    render() {
        const {
            // id, 
            title,
            poster_path,
            vote_average,
            overview,
            // release_date,
            genres,
          } = this.state.movieId;

        return (
            <>
                <section>
                    <button className='' type="button" >
                        🡸 Go back
                    </button>
                    {this.state.movieId.length !== 0 && 
                        <>
                            <img src={API.posterimgpath + poster_path} alt={title}/>
                            <div>
                                <h1>{title}</h1>
                                <p>User Score: {vote_average}%</p> 
                                <h2>Overview</h2>
                                <p>{overview}</p>
                                <h3>Genres</h3> 
                                <ul>
                                    {genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>  
                            </div>
                        </>
                    }
                </section>

                <section>
                    <p>Additional information</p>
                    <ul>
                        <li>Cast</li>
                        <li>Reviews</li>
                    </ul>
                </section>
            </>
        )
    }
}

export default MovieDetailsPageView;