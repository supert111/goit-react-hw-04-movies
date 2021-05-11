import { Component, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import API from '../api/data.api';

const CastMovieDetails = lazy(() =>
    import('../components/CastMovieDetails/CastMovieDetails' /* webpackChunkName: "cast-view" */),
);

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
          
          const { match } = this.props;

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
                                <p>User Score: {vote_average * 10}%</p> 
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
                        <li>
                            <NavLink to={`${match.url}/cast`} >Cast</NavLink>
                        </li>
                        <li>
                        <NavLink to={`${match.url}/reviews`} >Reviews</NavLink>
                        </li>
                    </ul>
                </section>
                <Route exact path={`${match.path}/cast`} component={CastMovieDetails} /> 
                {/* <Route path={`${match.url}/reviews`} component={BooksView} />  */}
            </>
        )
    }
}

export default MovieDetailsPageView;