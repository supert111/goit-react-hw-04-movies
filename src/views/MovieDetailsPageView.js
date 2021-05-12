import { Component, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import routes from '../routes';
import API from '../api/data.api';
import styles from './Styles/MovieDetailsPageView.module.css';

const CastMovieDetails = lazy(() =>
    import('../components/CastMovieDetails/CastMovieDetails' /* webpackChunkName: "cast-view" */),
);

const ReviewsMovieDetails = lazy(() =>
    import('../components/ReviewsMovieDetails/ReviewsMovieDetails' /* webpackChunkName: "reviews-view" */),
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

    handleGoBack = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.movies);
    }

    render() {
        const {
            title,
            poster_path,
            vote_average,
            overview,
            release_date,
            genres,
          } = this.state.movieId;
          
          const { match, location } = this.props;
          const yeasMovie = Number.parseInt(release_date);
        return (
            <>
                <section className={styles.section}>
                    <button className={styles.button} type="button" onClick={this.handleGoBack}>
                        🡸 Go back
                    </button>
                    {this.state.movieId.length !== 0 && 
                        <div className={styles.wrraper}>
                            <img className={styles.movie_poster} src={API.posterimgpath(poster_path)} alt={title}/>
                            <div className={styles.block_movie_value}>
                                <h1>{title} ({yeasMovie})</h1>
                                <p>User Score: {vote_average * 10}%</p> 
                                <h2>Overview</h2>
                                <p>{overview}</p>
                                <h3>Genres</h3> 
                                <ul className={styles.genre}>
                                    {genres.map(genre => (
                                        <li key={genre.id} className={styles.genre_name}>{genre.name}</li>
                                    ))}
                                </ul>  
                            </div>
                        </div>
                    }
                </section>

                <section className={styles.section}>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <NavLink to={{
                                pathname:`${match.url}/${routes.cast}`,
                                state: {
                                    from: location,
                                },
                                }} 
                            >Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname:`${match.url}/${routes.reviews}`,
                                state: {
                                    from: location,
                                },
                                }} 
                            >Reviews</NavLink>
                        </li>
                    </ul>
                </section>
                <Route exact path={`${match.path}/${routes.cast}`} component={CastMovieDetails} /> 
                <Route path={`${match.path}/${routes.reviews}`} component={ReviewsMovieDetails} /> 
            </>
        )
    }
}

export default MovieDetailsPageView;